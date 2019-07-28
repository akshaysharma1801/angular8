import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminManageComponent } from './components/admin-manage/admin-manage.component';


const routes: Routes = [
  {
    path: '',
    component:AdminDashboardComponent
  },
  {
    path: 'manage',
    component:AdminManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
