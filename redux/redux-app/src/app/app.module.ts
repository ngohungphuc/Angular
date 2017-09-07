import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { fromJS, Map} from 'immutable';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<Map<string, any>>) {
    // init store
    ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE));
  }
}
