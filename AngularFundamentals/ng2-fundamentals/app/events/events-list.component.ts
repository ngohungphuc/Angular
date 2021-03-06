/**
 * Created by phuc.ngo on 3/04/2017.
 */
import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {IEvent} from './shared/event.model'
import {EventService} from './shared/event.service'
@Component({
    selector: 'event-list',
    /*template: `
     <div>
     <h1>Upcoming Angular 2 Events</h1>
     <hr>
     <event-thumbnail #thumbnail (eventClick)="handleEventClick($event)" [event]="event1"></event-thumbnail>
     <h3>{{thumbnail.someProperty}}</h3>
     <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log Foo</button>
     </div>`*/
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr/>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>`,
})
export class EventsListComponent implements OnInit {
    events: IEvent[]

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    /**
    * {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
    * The events in resolve will call eventlistresolver then pass data back to events in ngOnInit method
    * @memberOf EventsListComponent
    */
    ngOnInit() {
        // data['events'] == resolve:{events:EventListResolver}
        this.events = this.route.snapshot.data['events']
    }

    handleEventClick(data) {
        console.log('Data receive ', data)
    }

}
