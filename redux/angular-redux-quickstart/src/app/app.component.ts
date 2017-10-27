import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store';
import { CounterActions } from './app.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  // When called with no arguments, @select replaces the property it decorates with an Observable
  // of the store property with the same name as the member variable in question.
  @select() readonly count$: Observable<number>;


  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions) {

  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }

}
