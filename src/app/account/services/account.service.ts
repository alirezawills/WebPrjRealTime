import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

constructor(private http: HttpClient) { }
baseUrl ='https://localhost:44320/api/Account/';
register(model: any)
{
  return this.http.post(this.baseUrl + 'register', model).pipe(

    map((resp: any) => {
      console.log(resp);
    })
  );
}

login(model: any)
{
  return this.http.post(this.baseUrl + 'login', model).pipe(

    map((resp: any) => {
      console.log(resp);
    })
  );
}
}


