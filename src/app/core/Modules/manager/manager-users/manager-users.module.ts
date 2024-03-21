import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerUsersRoutingModule } from './manager-users-routing.module';
import { ManagerUsersComponent } from './manager-users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmBlockUserComponent } from './components/confirm-block-user/confirm-block-user.component';


@NgModule({
  declarations: [
    ManagerUsersComponent,
    ConfirmBlockUserComponent
  ],
  imports: [
    CommonModule,
    ManagerUsersRoutingModule,
    SharedModule
  ]
})
export class ManagerUsersModule { }
