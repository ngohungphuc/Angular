/**
 * Created by phuc.ngo on 2/02/2017.
 */

import {Injectable} from "@angular/core";
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Auth} from "./services/auth.service";
@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.authenticated()) {
      console.log('auth guard passed');
      return true;
    }
    else {
      console.log('block by auth guard');
      this.router.navigate(['/']);
      return false;
    }
  }
}
