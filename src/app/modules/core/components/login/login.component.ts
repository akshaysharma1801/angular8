import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private _router: Router, private _userservice : UserService) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      'username'    : new FormControl('akshay@gmail.com',[Validators.required,Validators.email]),
      'password' : new FormControl('akshay2',Validators.required),
    })

  }

  onSubmit(){

    this._userservice.login(this.loginForm.value).subscribe(
      response => {
        console.log('repsone is hrere',response);
      },
      error => {
        console.log('error', error);
    });

  }

  logoutUser(){

    this._userservice.logout().subscribe(
      response => {
        console.log('repsone is hrere',response);
      },
      error => {
        console.log('error', error);
    });

  }


}
