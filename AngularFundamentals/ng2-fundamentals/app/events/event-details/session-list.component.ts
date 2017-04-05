import { OnChanges, Component, Input } from '@angular/core';
import { ISession } from "../index";

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]
    @Input() filterBy: string
    visibleSessions: ISession[] = []

    /**
     * ngOnChanges going to be call any time
     *  when any input data is change
     * @memberOf SessionListComponent
     */
    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
        }
    }

    /**
     * this.sessions.slice remove first element of array 
     * and return new array of sesssion
     * 
     * @param {any} filter 
     * 
     * @memberOf SessionListComponent
     */
    filterSessions(filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0)
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter
            })
        }
    }
}