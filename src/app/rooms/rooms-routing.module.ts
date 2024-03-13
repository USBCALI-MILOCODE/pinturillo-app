import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoomsLayoutComponent } from "./layouts/rooms-layout/rooms-layout.component";
import { RoomsPageComponent } from "./pages/rooms-page/rooms-page.component";
import { CreatePageComponent } from "./pages/create-page/create-page.component";

const routes: Routes = [
  {
    path: '',
    component: RoomsLayoutComponent,
    children: [
      { path: '', component: RoomsPageComponent },
      { path: 'create', component: CreatePageComponent },
      { path: '**', redirectTo: 'rooms'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }