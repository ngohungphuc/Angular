import { Component, OnInit } from '@angular/core';
import {User} from './user.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public user: User;

  ngOnInit() {
    this.user = {
      name: '',
      address: {
        street: '',
        postcode: '8000'
      }
    };
  }

  save(model: User, isValid: boolean) {
    // check if model is valid
    // if valid, call API to save customer
    console.log(model, isValid);
  }
}
