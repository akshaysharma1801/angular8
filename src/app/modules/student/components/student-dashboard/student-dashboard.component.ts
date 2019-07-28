import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { StudentPopupComponent  } from '../student-popup/student-popup.component';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  showPopup(){

      const dialogRef = this.dialog.open(StudentPopupComponent, {
        width: '250px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });

  }

}
