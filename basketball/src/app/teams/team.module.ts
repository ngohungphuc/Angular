import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser/';
import {FormsModule} from '@angular/forms';
import {TeamListComponent} from './team-list/team-list.component';
import {TeamsRoutingModule} from './team.routing';
/*import {CommonModule} from '../common/common.module';*/
import { CommonModule } from '@angular/common';
@NgModule({
	imports: [/*BrowserModule, */FormsModule, TeamsRoutingModule, CommonModule],
	declarations: [TeamListComponent]
})

export class TeamsModule {

}
