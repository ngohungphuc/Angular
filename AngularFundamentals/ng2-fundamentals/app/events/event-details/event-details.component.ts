import { IEvent, ISession } from './../shared/index';
import {EventService} from './../shared/event.service'
import {Component} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'
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
    event: IEvent
    addMode: boolean
    filterBy: string = 'all'
    sortBy: string = 'votes'

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.forEach((data) => {
                this.event = data['event']
                this.addMode = false
        })

    }

    addSession() {
        this.addMode = true
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
        console.log(nextId)
        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false
    }

    cancelAddSession() {
        this.addMode = false
    }
}
