import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';

import { LoadingComponent } from './components/loading/loading.component';
import { MapViewComponent } from './map-view/map-view/map-view.component';
import { BtnMylocationComponent } from './components/btn-mylocation/btn-mylocation.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    LoadingComponent,
    MapViewComponent,
    BtnMylocationComponent,
    AngularLogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapScreenComponent
  ]
})
export class MapsModule { }
