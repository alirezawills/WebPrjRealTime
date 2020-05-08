import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [

  ]
})
export class AccountModule { }
