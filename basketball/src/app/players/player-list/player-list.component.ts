import { Component, OnInit } from '@angular/core';
import {Player} from '../../common/players/player';
import {RestApiService} from '../../common/restapi.service';
@Component({
	selector: 'app-player-list',
	templateUrl: './player-list.component.html',
	styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
	listOfPlayers: Player[];
	constructor(private apiService: RestApiService) { }

	ngOnInit() {
		this.listOfPlayers = this.apiService.getListOfPlayers();
	}

}
