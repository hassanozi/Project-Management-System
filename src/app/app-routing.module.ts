import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path : '', redirectTo:'core' , pathMatch: 'full'},
  
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  
  { path: 'dashboard', loadChildren: () => import('./core/Modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
