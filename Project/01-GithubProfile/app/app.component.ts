import {Component} from '@angular/core';
import {GitHubService} from "./services/github.services";

@Component({
  selector: 'my-app',
  template: '<profile></profile>',
  providers: [GitHubService]
})
export class AppComponent {
  name = 'Github Profile finder';
}
