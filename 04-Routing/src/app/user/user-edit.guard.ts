import {CanDeactivate} from "@angular/router";
import {Observable} from "rxjs";
/**
 * Created by phuc.ngo on 11/01/2017.
 */
export interface ComponentCanDeactivate {
  canDeactivate: () => boolean|Observable<boolean>;
}
export class UserEditGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate): Observable<boolean>|boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
