/**
 * Created by ngohungphuc on 10/01/2017.
 */
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home-component.component";
import {UserComponent} from "./user/user.component";


const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/:id', component: UserComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
