import { Injectable } from '@angular/core';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
const JWThelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class SharedService {

constructor() {


 }

 getUserName()
 {
  const token = localStorage.getItem('token');
  return JWThelper.decodeToken(token).UserName;
 }


}
