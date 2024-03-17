import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: 'manager', loadChildren: () => import('./core/Modules/manager/manager.module').then(m => m.ManagerModule) },
  { path: 'employee', loadChildren: () => import('./core/Modules/employee/employee.module').then(m => m.EmployeeModule) },
  
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
