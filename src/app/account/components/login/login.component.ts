import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService,
              private route: Router,
              private toastr: ToastrService,
              private alertService: AlertService) { }
model: any = {};

  ngOnInit() {
  }

  login()
  {
    this.accountService.login(this.model).subscribe(next => {
     if (next != null)
     {

     this.alertService.showAlert(next.rec.result);
     if (next.rec.result.rsl)
    {

      this.route.navigate(['main']);
    }
     }
          },
          error => {
            this.toastr.error(error.message);
          }
          );
  }
}
