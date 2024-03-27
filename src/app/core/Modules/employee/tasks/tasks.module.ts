import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    DragDropModule
  ]
})
export class TasksModule { }
