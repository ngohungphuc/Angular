import { RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PlayerListComponent} from './players/player-list/player-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
	{
		path: 'teams',
		loadChildren: 'app/teams/team.module#TeamsModule'
	},
	{
		path: '',
		component: PlayerListComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
