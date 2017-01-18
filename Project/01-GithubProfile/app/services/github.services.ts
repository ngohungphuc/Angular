/**
 * Created by phuc.ngo on 18/01/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Header} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
  private username: string;
  private client_id = 'e82ecbad587169baba66';
  private client_secret = '62c32f96edb21295a77059e366324300eacf95b5';

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
}
