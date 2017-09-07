import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT } from './action';
import { Map } from 'immutable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select(s => s.get('counter')) counter;

  constructor(private ngRedux: NgRedux<Map<string, any>>) {
  }

  increment() {
    // dispatch action
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
