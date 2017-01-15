import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
    div .ng-invalid {
        border:1px solid red;
    }
  `]
})
export class TemplateDrivenComponent {
  user = {
    username: '1',
    email: 'n@gmail.com',
    password: '1'
  }

  onSubmit(form: NgForm) {
    console.log(this.user);
  }
}
