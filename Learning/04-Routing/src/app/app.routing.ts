/**
 * Created by ngohungphuc on 10/01/2017.
 */
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home-component.component";
import {UserComponent} from "./user/user.component";
import {USER_ROUTES} from "./user/user.routes";


const APP_ROUTES = [
  {path: 'user/:id', component: UserComponent},
  {path: 'user/:id', component: UserComponent, children: USER_ROUTES},
  {path: '', component: HomeComponent},
  //catch all 404 routes
  {path: '**', redirectTo: '/user/1', pathMatch: 'full'},

];

export const routing = RouterModule.forRoot(APP_ROUTES);
