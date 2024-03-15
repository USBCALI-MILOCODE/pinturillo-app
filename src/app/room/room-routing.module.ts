import { RouterModule, Routes } from "@angular/router";
import { RoomPageComponent } from "./pages/room-page/room-page.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: RoomPageComponent,
        children: [
          { path: '', component: RoomPageComponent },
          { path: '**', redirectTo: 'room'}
        ]
      }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }