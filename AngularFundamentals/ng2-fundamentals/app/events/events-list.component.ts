import { IEvent } from './shared/event.model';
/**
 * Created by phuc.ngo on 3/04/2017.
 */
import {Component,OnInit} from '@angular/core'
import {EventService} from './shared/event.service'
import { ToastrService } from './../common/toastr.service';
import { ActivatedRoute } from '@angular/router'
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
                    <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>`
})
export class EventsListComponent implements OnInit{
    events:IEvent[]
    constructor(private eventService:EventService,private toastr: ToastrService,private route:ActivatedRoute){

    }

    ngOnInit(){
        //data['events'] == resolve:{events:EventListResolver}
       this.events = this.route.snapshot.data['events']
    }

    handleEventClick(data) {
        console.log('Data receive ', data)
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName)
    }

    
}