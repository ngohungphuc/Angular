import {Injectable} from '@angular/core';
import {Player} from './players/player';

@Injectable()

export class RestApiService {
	listOfPlayers: Player[];
}
