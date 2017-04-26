import { Injectable } from '@angular/core'
import { Headers, Http, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { IUser } from './user.model'

@Injectable()
export class AuthService {
    public currentUser: IUser
    
    constructor(private http: Http) {

    }

    public loginUser(userName: string, password: string) {
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const options = new RequestOptions({ headers })
        const loginInfo = { username: userName, password }
        return this.http.post('/api/login', JSON.stringify(loginInfo), options).do((response) => {
            if (response) {
                this.currentUser = response.json().user as IUser
            }
        }).catch((error) => {
            return Observable.of(false)
        })
    }

    public updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }

    // return true if current user is set
    public isAuthenticated() {
        return !!this.currentUser
    }

    public checkAuthenticationStatus() {
        return this.http.get('/api/currentIdentity').map((response) => {
            if (response._body) {
                return response.json()
            }

            else {
                return {}
            }
        }).do((currentUser) => {
            if (!!currentUser.userName) {
                this.currentUser = currentUser
            }
        }).subscribe()
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText)
    }
}
