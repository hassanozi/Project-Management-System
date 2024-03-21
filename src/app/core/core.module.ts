import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { LoginComponent } from './Components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './Components/register/register.component';




@NgModule({
  declarations: [
    CoreComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
