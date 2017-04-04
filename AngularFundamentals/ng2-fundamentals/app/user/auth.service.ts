import { IUser } from './user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    currentUser:IUser
    loginUser(userName:string,password:string){
        this.currentUser = {
            id:1,
            userName:userName,
            firstName:"tony",
            lastName:"hudson"
        }
    }

    //return true if current user is set
    isAuthenticated(){
        return !!this.currentUser;
    }
}