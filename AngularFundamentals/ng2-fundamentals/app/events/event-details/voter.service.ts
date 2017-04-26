import { Injectable } from '@angular/core'
import { Headers, Http, RequestOptions, Response } from '@angular/http'
// need to import only observable to avoid redundant code
import { Observable } from 'rxjs/Observable'
import { ISession } from '../shared/event.model'
@Injectable()
export class VoterService {
    constructor(private http: Http) {

    }
    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter((voter) => voter !== voterName)
        this.http.delete(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`).catch(this.handleError).subscribe()
    }

    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName)
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const options = new RequestOptions({ headers })
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        this.http.post(url, JSON.stringify({}), options).catch(this.handleError).subscribe()

    }

    /**
     * Scan through and array if there any name
     *  of user in that array will return true
     * @param  {ISession} session   [description]
     * @param  {string}   voterName [description]
     * @return {[type]}             [description]
     */
    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some((voter) => voter === voterName)
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText)
    }
}
