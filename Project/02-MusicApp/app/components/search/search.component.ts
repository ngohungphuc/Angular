/**
 * Created by phuc.ngo on 19/01/2017.
 */
import {Component} from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {Artist} from "../../Model/Artist";

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
})
export class SearchComponent {
  searchStr: string;
  searchRes: Artist[];

  constructor(private  _spotifyService: SpotifyService) {

  }

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
      this.searchRes = res.artists.items;
    });
  }
}
