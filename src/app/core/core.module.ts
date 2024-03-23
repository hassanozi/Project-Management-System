import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { LoginComponent } from './Components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './Components/register/register.component';

import { ChangePasswordComponent } from './Components/change-password/change-password.component';

import { VerifyComponent } from './Components/verify/verify.component';





@NgModule({
  declarations: [
    CoreComponent,
    LoginComponent,
    RegisterComponent,

    ChangePasswordComponent,

    VerifyComponent,


  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
