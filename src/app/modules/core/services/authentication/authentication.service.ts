import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token : {
    value:string,
    expiresin:number
  };

  constructor() { }

  getToken() {
    if(!this.token) {
      this.token = JSON.parse(localStorage.getItem('authentication'));
    }
    return this.token;
  }

  setToken(token) {
    token.value = 'Bearer '+token.value;
    this.token = token;
    console.log(this.token);
    localStorage.setItem('authentication', JSON.stringify(token));
  }

  getAuthorizationHeader() {
    const token = this.getToken();
    if(token) {
      return token.value;
    }
    else {
      return null;
    }
  }

  forgetToken() {
    this.token = null;
    localStorage.removeItem('authentication');
  }

}
