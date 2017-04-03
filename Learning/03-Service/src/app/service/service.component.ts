import {Component} from '@angular/core';
import {DataService} from "./data.service";
@Component({
    selector: 'si-service',
    template: `
    <si-cmp-a></si-cmp-a>
    <si-cmp-b></si-cmp-b>
  `,
    //declear one instance for all component to use
    providers: [DataService]
})
export class ServiceComponent {
}
