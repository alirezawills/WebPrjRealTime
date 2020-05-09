import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { AppRoutingModule } from '../app-routing.module';
import { ChangePassComponent } from './components/changePass/changePass.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  declarations: [MainComponent,
  HeaderComponent,
  BodyComponent,
  ChangePassComponent
  ],
  providers: [

  ]
})
export class MainModule { }
