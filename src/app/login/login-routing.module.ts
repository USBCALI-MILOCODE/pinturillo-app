import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginLayoutComponent } from "./layouts/login-layout/login-layout.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { RoomsPageComponent } from "../rooms/pages/rooms-page/rooms-page.component";

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: LoginPageComponent },
      { path: '**', redirectTo: 'login'}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }