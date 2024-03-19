import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', loadChildren: () => import('../core/Modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
