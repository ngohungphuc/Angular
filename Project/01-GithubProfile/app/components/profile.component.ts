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
  repos: any[];
  contribs: any[];

  constructor(private _githubService: GitHubService) {
    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });
    this._githubService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
    /*this._githubService.getContrib().subscribe(contribs => {
     console.log(contribs);
     this.contribs = contribs;
     });*/

  }
}
