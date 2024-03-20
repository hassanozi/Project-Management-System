import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerUsersRoutingModule } from './manager-users-routing.module';
import { ManagerUsersComponent } from './manager-users.component';


@NgModule({
  declarations: [
    ManagerUsersComponent
  ],
  imports: [
    CommonModule,
    ManagerUsersRoutingModule
  ]
})
export class ManagerUsersModule { }
