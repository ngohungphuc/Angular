import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}   from './app.component';
import {UserComponent} from "./user/user.component";
import {UserDetailComponent} from "./user/user-detail.component";
import {UserEditComponent} from "./user/user-edit.component";
import {HomeComponent} from "./home-component.component";
import {routing} from "./app.routing";
import {UserDetailGuard} from "./user/user-detail.guard";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    HomeComponent
  ],
  imports: [BrowserModule, routing],
  bootstrap: [AppComponent],
  providers: [UserDetailGuard]
})
export class AppModule {
}
