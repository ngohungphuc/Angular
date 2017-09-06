import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT } from './action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select() counter;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  increment() {
    // dispatch action
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
