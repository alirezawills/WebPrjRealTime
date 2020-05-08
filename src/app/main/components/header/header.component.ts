import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public sharedService: SharedService, private accounrService: AccountService, private route: Router) { }

  ngOnInit() {

  }
  logout(){
this.accounrService.logOut();
this.route.navigate(['/account/login']);

  }

}
