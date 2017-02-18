import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { PlayersModule } from './players/players.module';
import { AppComponent } from './app.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		TeamListComponent,
		//remove player list component and add player module instead
		//PlayerListComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		PlayersModule,
		RouterModule.forRoot([
			{
				path: 'teams',
				component: TeamListComponent
			},
			{
				path: 'players',
				component: PlayerListComponent
			},
			{
				path: '',
				component: PlayerListComponent
			},
			{
				path: '**',
				component: NotFoundComponent
			}
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
