import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-changePass',
  templateUrl: './changePass.component.html',
  styleUrls: ['./changePass.component.css']
})
export class ChangePassComponent implements OnInit {

  constructor(private accountService: AccountService) { }
model: any={};

  ngOnInit() {
  }
  changePass()
  {
    this.accountService.changePass(this.model).subscribe(next => {
     console.log(next);
  },
  error => {

  }
  );

  }
}
