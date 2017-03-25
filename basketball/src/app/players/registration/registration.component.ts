import { Component, OnInit } from '@angular/core';
import {RegistrationViewModel} from './registrationViewModel';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationViewModel:RegistrationViewModel;
  constructor() {
  	this.registrationViewModel = new RegistrationViewModel();
  }

  ngOnInit() {

  }

  addOrRemoveInjury(value: string){
    if(this.confirmInjuryNotAlreadyChosen(value)){
      this.registrationViewModel.injuries.push(value);
    }
    else{
      var index = this.registrationViewModel.injuries.indexOf(value);
      this.registrationViewModel.injuries.splice(index);
    }
  }

  private confirmInjuryNotAlreadyChosen(value: string): boolean {
    return this.registrationViewModel.injuries.find(inj => inj.toLowerCase() === value.toLowerCase()) == null;
  }
}
