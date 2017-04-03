/**
 * Created by phuc.ngo on 3/04/2017.
 */
import {Component} from '@angular/core'
@Component({
    selector: 'event-list',
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr>
            <event-thumbnail (eventClick)="handleEventClick($event)" [event]="event1"></event-thumbnail>
        </div>`
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/20/2017',
        time: '10:00 AM',
        price: 599.99,
        imageUrl: 'app/asset/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    handleEventClick(data) {
        console.log('Data receive ', data);
    }
}