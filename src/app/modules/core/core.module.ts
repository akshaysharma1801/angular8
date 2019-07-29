import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// import { NavbarComponent } from './components/navbar/navbar.component';
// import { WebsiteNolayoutComponent } from './components/website-nolayout/website-nolayout.component';
// import { NoLayoutComponent } from './components/no-layout/no-layout.component';
// import { LoginComponent } from './components/login/login.component';
// import { SignupComponent } from './components/signup/signup.component';


import {NavbarComponent,WebsiteNolayoutComponent,NoLayoutComponent,LoginComponent,SignupComponent} from './index';


@NgModule({
  declarations: [NavbarComponent, WebsiteNolayoutComponent, NoLayoutComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class CoreModule { }
