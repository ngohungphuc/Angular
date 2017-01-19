/**
 * Created by phuc.ngo on 19/01/2017.
 */
import {Routes, RouterModule} from "@angular/router";
import {SearchComponent} from "./components/search/search.component";
import {AboutComponent} from "./components/about/about.component";
import {ModuleWithProviders} from "@angular/core";
const appRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
