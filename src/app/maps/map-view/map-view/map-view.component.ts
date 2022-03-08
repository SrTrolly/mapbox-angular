import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Map, Popup, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild("mapDiv") mapDivElement!: ElementRef;

  constructor(private placesService: PlacesService) { }

  ngAfterViewInit(): void {
    if (!this.placesService.useLocation) throw Error("No hay placesService.userLocation");
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesService.useLocation,
      zoom: 9 // starting zoom
    });

    const popup = new Popup().setHTML(`
    <h6>Aqui Estoy</h6>
    <span>Estoy en este lugar del mundo</span>
    `);

    new Marker({ color: "red" }).setLngLat(this.placesService.useLocation)
      .setPopup(popup).addTo(map);
  }



}