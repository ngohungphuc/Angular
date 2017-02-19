import { RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PlayerListComponent} from './players/player-list/player-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
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
