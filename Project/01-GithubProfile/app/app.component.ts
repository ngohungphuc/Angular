import {Component} from '@angular/core';
import {GitHubService} from "./services/github.services";

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html',
  providers: [GitHubService]
})
export class AppComponent {
  name = 'Github Profile finder';
}
