import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private accountService: AccountService,
              private toastr: ToastrService,
              private alertService: AlertService,
              private route: Router) { }
model: any = {};
  ngOnInit() {
  }
  register(){
    // tslint:disable-next-line: triple-equals
    if (this.model.password != this.model.repassword)
    {
    this.toastr.warning('کلمه عبور و تکرار آن متفاوت است');
    return null;
    }
    this.accountService.register(this.model).subscribe(next => {
        this.alertService.showAlert(next.rec);
        this.route.navigate(['/account/login']);
    },
    error => {

    }
    );

  }

}
