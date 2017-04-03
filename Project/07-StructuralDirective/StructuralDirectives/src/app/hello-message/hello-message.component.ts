import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hello-message',
  templateUrl: './hello-message.component.html',
  styleUrls: ['./hello-message.component.css']
})
export class HelloMessageComponent implements OnInit, OnDestroy {
  
  constructor() { }

  ngOnInit() {
     console.log('onInit interface');
  }

  ngOnDestroy() {
    console.log('onDestroy interface');
  }
}
