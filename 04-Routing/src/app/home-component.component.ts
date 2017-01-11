import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    <hr>
    {{param}}
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {

  private subscription: Subscription;
  param: string;

  constructor(private route: ActivatedRoute) {
    this.subscription = this.route.queryParams.subscribe(
      queryParam => this.param = queryParam['analytics']
    );
  }

  //prevent memory leak
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
