import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsLayoutComponent } from './layouts/rooms-layout/rooms-layout.component';
import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsPageComponent } from './pages/rooms-page/rooms-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';

@NgModule({
  declarations: [
    RoomsLayoutComponent,
    RoomsPageComponent,
    CreatePageComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule
  ]
})
export class RoomsModule { }
