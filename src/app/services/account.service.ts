import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
const JWThelper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})

export class AccountService {
constructor(private http: HttpClient) { }
baseUrl = 'https://localhost:44320/api/Account/';
register(model: any)
{
  return this.http.post(this.baseUrl + 'register', model).pipe(

    map((resp: any) => {
      return resp;
    })
  );
}
login(model: any)
{
  return this.http.post(this.baseUrl + 'login', model).pipe(
    map((resp: any) => {
      localStorage.setItem('token', resp.token);
      return resp;
    })
  );
}

loggedIn()
{
  const token = localStorage.getItem('token');
  if (token != "undefined")
{
  return !JWThelper.isTokenExpired(token);
}
  return false;
}
logOut(){
  localStorage.removeItem('token');

}

}


