import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser/';
import {FormsModule} from '@angular/forms';
import {TeamListComponent} from './team-list/team-list.component';
import {TeamsRoutingModule} from './team.routing';

@NgModule({
	imports: [BrowserModule, FormsModule, TeamsRoutingModule],
	declarations: [TeamListComponent]
})

export class TeamsModule {

}
