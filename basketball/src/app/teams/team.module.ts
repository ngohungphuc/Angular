import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser/';
import {FormsModule} from '@angular/forms';
import {TeamListComponent} from './team-list/team-list.component';
import {TeamsRoutingModule} from './team.routing';
/*import {CommonModule} from '../common/common.module';*/
import { CommonModule } from '@angular/common';
import { TeamEditComponent } from './team-edit/team-edit.component';
@NgModule({
	imports: [/*BrowserModule, */FormsModule, TeamsRoutingModule, CommonModule],
	declarations: [TeamListComponent, TeamEditComponent]
})

export class TeamsModule {

}
