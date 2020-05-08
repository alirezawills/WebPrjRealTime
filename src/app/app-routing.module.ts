import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/components/login/login.component';
import { AccountComponent } from './account/account.component';
import { MainComponent } from './main/main.component';
import { BodyComponent } from './main/components/body/body.component';
import { RegisterComponent } from './account/components/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginGuard } from './guard/login.guard';



const routes: Routes = [
{
  path: 'account', component: AccountComponent,
  canActivate: [LoginGuard],
  children: [
    {
      path: '', component: LoginComponent
    },
    {
      path: 'register', component: RegisterComponent
    },
{
  path: 'login', component: LoginComponent
}
]},
{
path: 'main', component: MainComponent,
canActivate: [AuthGuard],
children: [
  {
    path: '', component: BodyComponent
  }
  ]
 },

  {path: 'account', redirectTo: 'account', pathMatch: 'full' },
  {path: '', redirectTo: 'account', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
