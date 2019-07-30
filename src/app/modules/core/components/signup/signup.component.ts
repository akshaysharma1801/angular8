import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UserService} from '../../services/user/user.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signForm : FormGroup;

  constructor(private _router: Router, private _userservice : UserService) { }

  ngOnInit() {

    this.signForm = new FormGroup({
      'username' : new FormControl('akshay@gmail.com',Validators.required),
      'email'    : new FormControl('akshay@gmail.com',[Validators.required,Validators.email]),
      'password' : new FormControl('akshay2',Validators.required),
      'password2': new FormControl('akshay2',Validators.required)
    })

    this.loginUser();

  }

  navigateToLogin(){
    this._router.navigate(['/login']);
  }

  onSubmit(){

    this._userservice.RegisterUser(this.signForm.value).subscribe(
      response => {
        console.log('repsone is hrere',response);
      },
      error => {
        console.log('error', error);
    });

  }

  loginUser(){
    const logintest  = {username : 'akshay@gmail.com',password : 'akshay2'}
    this._userservice.login(logintest).subscribe(
      response => {
        console.log('login response',response);
      },
      error => {
        console.log('error', error);
    });
  }

}
