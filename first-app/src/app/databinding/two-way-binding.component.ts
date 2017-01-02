import {Component} from '@angular/core';

@Component({
    selector: 'app-two-way-binding',
    template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.age">
  `
})
export class TwoWayBindingComponent {
    person = {
        name: 'Tony',
        age: 21
    };
}
