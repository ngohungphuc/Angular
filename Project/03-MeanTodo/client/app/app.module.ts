import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {TodoComponent} from "./components/todo.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, TodoComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
