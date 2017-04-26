/**
 * Created by ngohungphuc on 03/04/2017.
 */
import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {EventService} from './shared/event.service'
@Component({
    templateUrl: 'app/events/create-event.component.html',
})
export class CreateEventComponent {
    isDirty = true
    event: any

    constructor(private router: Router, private eventService: EventService) {

    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues).subscribe((event) => {
            this.isDirty = false
            this.router.navigate(['/events'])
        })
    }

    cancel() {
        this.router.navigate(['/events'])
    }
}
