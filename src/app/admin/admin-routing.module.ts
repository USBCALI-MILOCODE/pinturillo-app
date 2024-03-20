import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AdminOptionPageComponent } from "./pages/admin-option-page/admin-option-page.component";
import { AdminRoomPageComponent } from "./pages/admin-room-page/admin-room-page.component";
import { AdminThemePageComponent } from "./pages/admin-theme-page/admin-theme-page.component";
import { AdminUserPageComponent } from "./pages/admin-user-page/admin-user-page.component";

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: AdminOptionPageComponent },
      { path: 'rooms', component: AdminRoomPageComponent },
      { path: 'themes', component: AdminThemePageComponent },
      { path: 'users', component: AdminUserPageComponent },
      { path: '', component: AdminOptionPageComponent },
      { path: '**', redirectTo: 'admin'}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }