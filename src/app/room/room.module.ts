import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoomRoutingModule } from './room-routing.module';
import { RoomPageComponent } from './pages/room-page/room-page.component';

@NgModule({
  imports: [
    CommonModule,
    RoomRoutingModule
  ],
  declarations: [
    RoomPageComponent,
  ]
})
export class RoomModule { }
