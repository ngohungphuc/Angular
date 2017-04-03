import {EventService} from './../shared/event.service'
import {Component} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styles: [`
        .container {
            padding-left: 20px;
            padding-right: 20px
        }

        .event-image {
            height: 100px;
        }`
    ]
})
export class EventDetailsComponent {
    event: any

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        console.log(+this.route.snapshot.params['id'])
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }
}