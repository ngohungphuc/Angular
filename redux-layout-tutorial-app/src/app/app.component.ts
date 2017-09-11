import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
// Import the root state in order to select parts of it.
import * as fromRoot from './common/index';
// Import the layout actions to make dispatching from the component possible.
import * as layout from './common/layout/layout.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private store: Store<fromRoot.AppState>) {

  }
}
