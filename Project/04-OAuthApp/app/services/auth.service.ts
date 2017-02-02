/**
 * Created by ngohungphuc on 01/02/2017.
 */

import {Injectable} from "@angular/core";
import {tokenNotExpired} from "angular2-jwt";
import {options} from "../auth.options";

declare var Auth0Lock: any;
@Injectable()
export class Auth {
  //configure Auth0
  lock = new Auth0Lock('nJZyU72eUvQpb6311V40hrYdWhB2y80V', 'tonyhudson.auth0.com', options);

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult: any) => {
      this.lock.getProfile(authResult.idToken, function (err: any, profile: any) {
        if (err) throw new Error(err);
        //set profile
        localStorage.setItem('profile', JSON.stringify(profile));
        //set token
        localStorage.setItem('id_token', authResult.idToken);
      });
    });
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  }
}
