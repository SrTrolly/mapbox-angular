import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';

import { LoadingComponent } from './components/loading/loading.component';
import { MapViewComponent } from './map-view/map-view/map-view.component';
import { BtnMylocationComponent } from './components/btn-mylocation/btn-mylocation.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    LoadingComponent,
    MapViewComponent,
    BtnMylocationComponent,
    AngularLogoComponent,
    SearchBarComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapScreenComponent
  ]
})
export class MapsModule { }
