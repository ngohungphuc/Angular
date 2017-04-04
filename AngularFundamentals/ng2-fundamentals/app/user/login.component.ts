import { Component } from '@angular/core'

@Component({
    templateUrl:'app/user/login.component.html'
})

export class LoginComponent{
    login(formValue){
        console.log(formValue)
    }
}