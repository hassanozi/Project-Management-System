import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeleteTaskComponent } from './components/delete-task/delete-task.component';


@NgModule({
  declarations: [
    TasksComponent,
    DeleteTaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ]
})
export class TasksModule { }
