import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentResultComponent } from './components/student-result/student-result.component';


const routes: Routes = [
  {
    path: '',
    component:StudentDashboardComponent
  },
  {
    path: 'result',
    component:StudentResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
