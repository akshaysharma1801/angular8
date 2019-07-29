import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteNolayoutComponent } from './modules/core/components/website-nolayout/website-nolayout.component';
import { NoLayoutComponent } from './modules/core/components/no-layout/no-layout.component';
import { SignupComponent } from './modules/core/components/signup/signup.component';
import { LoginComponent } from './modules/core/components/login/login.component';


const routes: Routes = [
  {
    path: '',
    component:WebsiteNolayoutComponent,
    loadChildren: () => import('./modules/website/website.module').then(mod => mod.WebsiteModule)
  },
  {
    path: 'admin',
    component:NoLayoutComponent,
    loadChildren: () => import('./modules/admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: 'student',
    component:NoLayoutComponent,
    loadChildren: () => import('./modules/student/student.module').then(mod => mod.StudentModule)
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
