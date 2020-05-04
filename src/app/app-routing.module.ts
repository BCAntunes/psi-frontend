import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HotelsComponent } from "./hotels/hotels.component";
import { HotelDetailComponent } from "./hotel-detail/hotel-detail.component";
import { QuartosComponent } from './quartos/quartos.component';
import { QuartoDetailComponent } from './quarto-detail/quarto-detail.component';

const routes: Routes = [
  { path: "hotels", component: HotelsComponent },
  { path: "hotel/:id", component: HotelDetailComponent },
  { path: "hotel", component: HotelDetailComponent },
  { path: "quartos", component: QuartosComponent },
  { path: "quarto/:id", component: QuartoDetailComponent },
  { path: "quarto", component: QuartoDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
