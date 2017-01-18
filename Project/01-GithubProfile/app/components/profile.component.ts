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
  user: any;
  repos: any[];
  contribs: any[];
  username: string;

  constructor(private _githubService: GitHubService) {
    this.user = false;
  }

  searchUser() {
    this._githubService.updateUser(this.username);
    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });
    this._githubService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }
}
