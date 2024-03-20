import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerProjectsRoutingModule } from './manager-projects-routing.module';
import { ManagerProjectsComponent } from './manager-projects.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditProjectComponent } from './components/add-edit-project/add-edit-project.component';


@NgModule({
  declarations: [
    ManagerProjectsComponent,
    AddEditProjectComponent
  ],
  imports: [
    CommonModule,
    ManagerProjectsRoutingModule,
    SharedModule
  ]
})
export class ManagerProjectsModule { }
