/**
 * Created by phuc.ngo on 18/01/2017.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
  private username: string;
  private client_id = 'c0c414660930c58dfa48';
  private client_secret = 'a779d5ca786bae9c82a82c7fd6b091853b1d1f4d';

  constructor(private _http: Http) {
    console.log('Github service ready');
    this.username = 'ngohungphuc';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username +
      '?client_id=' + this.client_id +
      '&client_sercret=' + this.client_secret)
      .map(res => res.json());
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username +
      '/repos?client_id=' + this.client_id +
      '&client_sercret=' + this.client_secret)
      .map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }

  /*getContrib() {
   return this._http.get('http://api.github.com/repos/:' + this.username +
   '/stats/?client_id=' + this.client_id +
   '&client_sercret=' + this.client_secret)
   .map(res => res.json());
   }*/
}
