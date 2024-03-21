import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';

const routes: Routes = [
  { path: '', component: ManagerComponent },
 { path: 'projects', loadChildren: () => import('./manager-projects/manager-projects.module').then(m => m.ManagerProjectsModule) },
  { path: 'users', loadChildren: () => import('./manager-users/manager-users.module').then(m => m.ManagerUsersModule) },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
