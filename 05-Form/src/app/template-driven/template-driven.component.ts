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
  onSubmit(form: NgForm) {
    console.log(form);
  }
}
