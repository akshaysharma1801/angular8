import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WebsiteNolayoutComponent } from './components/website-nolayout/website-nolayout.component';
import { Routes, RouterModule } from '@angular/router';
import { NoLayoutComponent } from './components/no-layout/no-layout.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [NavbarComponent, WebsiteNolayoutComponent, NoLayoutComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class CoreModule { }
