import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Custom module
import { MaterialModule } from './material.module';

// Components
import { MapComponent } from './components/map/map.component';
import { EditMapComponent } from './components/map/edit-map.component';

// Angular maps
import { AgmCoreModule } from '@agm/core';
@NgModule({
  entryComponents: [
    EditMapComponent
  ],
  declarations: [
    AppComponent,
    MapComponent,
    EditMapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR API KEY MADREFOCA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
