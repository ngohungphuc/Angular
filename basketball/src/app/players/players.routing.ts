import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PlayerListComponent} from './player-list/player-list.component';

const routes: Routes = [
	{
		path: 'players',
		component: PlayerListComponent
	},
	/*	{
			path: '',
			component: PlayerListComponent
		}*/
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PlayersRoutingModule { }
