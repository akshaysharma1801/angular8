import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WebsiteNolayoutComponent } from './components/website-nolayout/website-nolayout.component';
import { Routes, RouterModule } from '@angular/router';
import { NoLayoutComponent } from './components/no-layout/no-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NavbarComponent, WebsiteNolayoutComponent, NoLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class CoreModule { }
