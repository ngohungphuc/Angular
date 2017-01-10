import {Component, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)="onNavigate()">Go home</button>
    `
})
export class UserComponent {
  constructor(private router: Router) {
  }

  onNavigate() {
    this.router.navigate(['/']);
  }
}
