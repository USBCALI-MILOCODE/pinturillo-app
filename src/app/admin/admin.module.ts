import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminOptionPageComponent } from './pages/admin-option-page/admin-option-page.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminLayoutComponent,
    AdminOptionPageComponent
  ]
})
export class AdminModule { }
