import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{routing,appRoutingProviders} from './app.routing';
import { AppComponent }  from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
@NgModule({
  imports:      [ BrowserModule,routing ],
  declarations: [ AppComponent,HomeComponent,ProfileComponent],
  bootstrap:    [ AppComponent ],
  providers:[
    appRoutingProviders
  ]
})
export class AppModule { }
