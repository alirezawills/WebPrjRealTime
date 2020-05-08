import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [MainComponent,
  HeaderComponent,
  BodyComponent
  ],
  providers: [

  ]
})
export class MainModule { }
