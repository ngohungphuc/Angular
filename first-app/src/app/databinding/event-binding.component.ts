import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-event-binding',
    template: `
        <button (click)="onClicked()">Click me</button>
  `,
    styles: []
})
export class EventBindingComponent {
    //use output keywork so that other component can use it
    @Output() clicked = new EventEmitter();

    onClicked() {
        this.clicked.emit("It worked");
        //alert("It worked");
    }
}
