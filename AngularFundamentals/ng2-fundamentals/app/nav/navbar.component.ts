import { EventService, ISession } from '../events/shared/index'
import { AuthService } from './../user/auth.service'

/**
 * Created by phuc.ngo on 3/04/2017.
 */
import {
    Component,
} from '@angular/core'

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`li > a.active { color:#f97924}`],
})

export class NavBarComponent {
    searchTerm = ''
    foundSessions: ISession[]
    constructor(private auth: AuthService, private eventService: EventService) {
    }

    searchSession(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(
            (sessions) => {
                this.foundSessions = sessions
            },
        )
    }
}
