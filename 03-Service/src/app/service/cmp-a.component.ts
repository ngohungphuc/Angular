import {Component} from '@angular/core';
import {LogService} from './log.service';
@Component({
    selector: 'si-cmp-a',
    providers: [LogService],
    template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
      <button (click)="onSend(input.value)">Send</button>
    </div>
    <hr>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h3>Received Value</h3>
        <p>{{value}}</p>
    </div>
  `
})
export class CmpAComponent {
    value = '';

    constructor(private logService: LogService) {

    }

    items: string[] = [];

    onLog(value: string) {
        this.logService.writeToLog(value);
    }

    onStore(value: string) {

    }

    onGet() {

    }

    onSend(value: string) {

    }
}
