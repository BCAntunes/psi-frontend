import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { QuartosComponent } from './quartos/quartos.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { QuartoDetailComponent } from './quarto-detail/quarto-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    QuartosComponent,
    HotelDetailComponent,
    QuartoDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
