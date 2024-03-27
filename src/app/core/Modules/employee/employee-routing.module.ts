import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [{ path: '', component: EmployeeComponent },
{ path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule), title: 'tasks' },
{ path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule), title: 'projects' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
