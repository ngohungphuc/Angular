import { AuthService } from './../user/auth.service';
import { ISession, EventService } from '../events/shared/index';

/**
 * Created by phuc.ngo on 3/04/2017.
 */
import {
    Component
} from '@angular/core'

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`li > a.active { color:#f97924}`]
})

export class NavBarComponent {
    searchTerm: string = ""
    foundSessions: ISession[]
    constructor(private auth: AuthService, private eventService: EventService) {
    }

    searchSession(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(
            sessions => {
                this.foundSessions = sessions
            }
        );
    }
}