import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// import {MatCardModule} from '@angular/material/card';
// import {MatExpansionModule} from '@angular/material/expansion';
// import {MatDialogModule} from '@angular/material/dialog';

import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  } from '@angular/material';

const materialDesign = [
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatExpansionModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
]

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    materialDesign,
    FormsModule,
    ReactiveFormsModule
  ],
  exports :[SidebarComponent,materialDesign,ReactiveFormsModule,FormsModule],
})
export class SharedModule {}
