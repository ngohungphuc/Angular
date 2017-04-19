import { Router } from '@angular/router';
import { Component } from '@angular/core'
import { AuthService } from './auth.service';

@Component({
    templateUrl:'app/user/login.component.html',
    styles: [`
        em {float:right; color:#E05C65; padding-left:10px;}
    `]
})

export class LoginComponent{
    loginInvalid = false
    constructor(private authService:AuthService,private router:Router){

    }

    login(formValue){
        this.authService.loginUser(formValue.userName,formValue.password).subscribe(resp=>{
            if(!resp){
                this.loginInvalid = true
            } else {
                this.router.navigate(['events'])
            }
        })
    }

    cancel(){
        this.router.navigate(['events'])
    }
}