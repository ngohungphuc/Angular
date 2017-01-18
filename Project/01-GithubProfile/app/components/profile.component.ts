/**
 * Created by phuc.ngo on 18/01/2017.
 */
import {Component} from '@angular/core';
import {GitHubService} from "../services/github.services";

@Component({
  selector: 'profile',
  templateUrl: '/app/components/profile.component.html',
  providers: [GitHubService]
})
export class ProfileComponent {
  user: any[];

  constructor(private _githubService: GitHubService) {
    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
