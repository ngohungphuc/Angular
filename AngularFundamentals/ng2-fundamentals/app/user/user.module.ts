import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LoginComponent}from './login.component'; 
import {NgModule}from '@angular/core'
import {CommonModule}from '@angular/common'
import {RouterModule}from '@angular/router'
import {userRoutes}from './user.routes'
import {ProfileComponent}from './profile.component'
@NgModule( {
    imports:[
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ], 
    declarations:[
        ProfileComponent, 
        LoginComponent
    ], 
    providers:[

    ]
})
export class UserModule {

}