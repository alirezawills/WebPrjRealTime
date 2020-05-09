import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccountModule } from './account/account.module';
import { MainModule } from './main/main.module';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { AccountService } from './services/account.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AlertService } from './services/alert.service';
import { AuthGuard } from './guard/auth.guard';
import { SharedService } from './services/shared.service';
import { LoginGuard } from './guard/login.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

export function tokenGet() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGet,
        whitelistedDomains: [environment.host]

      },
    }),
    AppRoutingModule,
    AccountModule,
    MainModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [ErrorInterceptorProvider,
    AccountService,
     AlertService,
    AuthGuard,
    SharedService,
    LoginGuard
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
