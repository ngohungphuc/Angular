import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {TodoComponent} from "./components/todo.component";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, TodoComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
