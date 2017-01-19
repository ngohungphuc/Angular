/**
 * Created by phuc.ngo on 19/01/2017.
 */

import {Component, OnInit} from '@angular/core';
import {Artist} from "../../Model/Artist";
import {Album} from "../../Model/Album";
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../../services/spotify.service";

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html',
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];

  constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this._route.params.map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAlbum(id)
          .subscribe((album) => {
            this.album = album;
          });
      });
  }
}

