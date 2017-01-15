import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven.component.html'
})
export class TemplateDrivenComponent {
  onSubmit(form: NgForm) {
    console.log(form);
  }
}
