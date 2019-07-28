import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentResultComponent } from './components/student-result/student-result.component';
import { SharedModule } from '../shared/shared.module';
import { StudentPopupComponent } from './components/student-popup/student-popup.component';


@NgModule({
  declarations: [StudentDashboardComponent, StudentResultComponent, StudentPopupComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ],
  entryComponents: [StudentPopupComponent],
})
export class StudentModule { }
