import {Routes} from "@angular/router";
import {UserDetailComponent} from "./user-detail.component";
import {UserEditComponent} from "./user-edit.component";
/**
 * Created by phuc.ngo on 11/01/2017.
 */
export const USER_ROUTES:Routes =[
  {path:'detail',component:UserDetailComponent},
  {path:'edit',component:UserEditComponent},
];
