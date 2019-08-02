import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError, from } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/authentication.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json','Accept':'application/json'}),
  };

  constructor(private http: HttpClient,private authenticationService: AuthenticationService ) { }

  RegisterUser(User): Observable<any>{
    return this.http.post('api/account/registerview/', User, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  login(credentials): Observable<any> {
    // authenticate user
    return this.http.post('api/account/authview/', credentials).pipe( tap ((profile: any) => {
        this.authenticationService.setToken({value: profile.token});
        localStorage.setItem('profile', JSON.stringify(profile));
      }));
  }


  logout() {
    return this.http.get('api/account/logout/')
    .pipe( tap((response: any) => {
        if(response) {
          this.authenticationService.forgetToken();
        }
      })
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
