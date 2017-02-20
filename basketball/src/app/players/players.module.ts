import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser/';
import {FormsModule} from '@angular/forms';
import {PlayerListComponent} from './player-list/player-list.component';
import {PlayersRoutingModule} from './players.routing';
import {CommonModule} from '../common/common.module';
import { PlayersProfileComponent } from './players-profile/players-profile.component';
@NgModule({
	imports: [BrowserModule, FormsModule, PlayersRoutingModule, CommonModule],
	declarations: [PlayerListComponent, PlayersProfileComponent]
})

export class PlayersModule {

}
