import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminManageComponent } from './components/admin-manage/admin-manage.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AdminDashboardComponent, AdminManageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
