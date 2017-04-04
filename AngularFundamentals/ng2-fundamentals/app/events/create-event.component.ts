/**
 * Created by ngohungphuc on 03/04/2017.
 */
import {Component} from '@angular/core'
import {Router} from "@angular/router"
import {EventService} from './shared/event.service'
@Component({
    templateUrl: 'app/events/create-event.component.html'
})
export class CreateEventComponent {
    isDirty: boolean = true

    constructor(private router: Router, private eventService: EventService) {

    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }

    cancel() {
        this.router.navigate(['/events'])
    }
}