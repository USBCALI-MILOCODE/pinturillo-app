import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SkinPageComponent } from './pages/skin-page/skin-page.component';

@NgModule({
  declarations: [
    LoginLayoutComponent,
    LoginPageComponent,
    SkinPageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
