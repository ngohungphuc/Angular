/**
 * Created by phuc.ngo on 3/04/2017.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'event-thumbnail',
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
    template: `
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
        </div>`,
    styles: [
            `.thumbnail {
            min-height: 210px;
        }`
    ]
})
export class EventThumbnailComponent {
    @Input() event: any
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
}