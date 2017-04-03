import { Component, OnInit, Input } from '@angular/core';
import {Team} from '../../common/teams/team';
@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {
  @Input() selectedTeam: Team;
  constructor() { }

  ngOnInit() {
  }

}
