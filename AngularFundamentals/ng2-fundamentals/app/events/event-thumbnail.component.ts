/**
 * Created by phuc.ngo on 3/04/2017.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared/event.model';
@Component({
    /*    template: `
     <div class="well hoverwell thumbnail">
     <h2>{{event.name}}</h2>
     <div>Date: {{event.date}}</div>
     <div>Time: {{event.time}}</div>
     <div>Price: \${{event.price}}</div>
     <div>
     <span>Location: {{event.location.address}}</span>
     <span>&nbsp;</span>
     <span>{{event.location.city}}, {{event.location.country}}</span>
     </div>
     <button class="btn btn-primary" (click)="handleClickMe()">Click</button>
     </div>`,*/
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name | uppercase}}</h2>
        <div>Date: {{event?.date | date:'shortDate'}}</div>
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: {{event?.price | currency:'USD':true}}</div>
        <div [hidden]="!event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div [hidden]="!event?.onlineUrl">
            Online Url: {{event?.onlineUrl}}
        </div>
        </div>
    `,
    styles: [`
        .pad-left { margin-left: 10px; }
        .thumbnail { min-height: 210px; }
        .well div { color: #bbb; }
        .thumbnail { min-height: 210px; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: IEvent
    //the output name must be equal in parent component
    @Output() eventClick = new EventEmitter()
    someProperty: any = "some value"

    handleClickMe() {
        this.eventClick.emit(this.event.name)
    }

    //using #thumbnail template var to call this method
    logFoo() {
        console.log('foo')
    }

    getStartTimeStyle():any {
    if (this.event && this.event.time === '8:00 am')
      return {color: '#003300', 'font-weight': 'bold'}
    return {}
  }
}