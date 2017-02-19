import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './app.routing';

import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/team.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent
		//TeamListComponent,
		//remove player list component and add player module instead
		//PlayerListComponent,

	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		PlayersModule,
		//TeamsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
