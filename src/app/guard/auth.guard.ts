import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
   *
   */
  constructor(private accountservice: AccountService,
              private route: Router,
              private toast: ToastrService,
              ) {


  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
if (this.accountservice.loggedIn())
{
  // if (state.url == 'account/login') {
  //   this.route.navigate(['main']);
  // }
  return true;
}
this.toast.error('', 'عدم دسترسی');
this.route.navigate(['/account/login']);
return false;
  }

}
