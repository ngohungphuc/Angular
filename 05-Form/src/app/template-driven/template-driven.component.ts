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
  //set default value for from
  user = {
    username: '1',
    email: 'n@gmail.com',
    password: '1',
    gender: 'male'
  };

  gender = [
    'male',
    'female'
  ];

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
