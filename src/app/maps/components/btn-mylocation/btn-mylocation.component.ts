import { Component } from '@angular/core';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-btn-mylocation',
  templateUrl: './btn-mylocation.component.html',
  styleUrls: ['./btn-mylocation.component.css']
})
export class BtnMylocationComponent {

  constructor(private mapService: MapService, private placesService: PlacesService) { }

  goToMyLocation() {
    if (!this.placesService.isUserLocationReady) throw Error("No hay ubicacion de usuario");
    if (!this.mapService.isMapReady) throw Error("No hay mapa disponible");
    this.mapService.flyTo(this.placesService.useLocation!);
  }



}
