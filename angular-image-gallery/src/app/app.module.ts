import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AppComponent } from './app.component';
import {CloudinaryModule, CloudinaryConfiguration, provideCloudinary} from '@cloudinary/angular-4.x';
import * as cloudinary from 'cloudinary-core';
import { FileUploadModule } from 'ng2-file-upload';

const appRoutes: Routes = [
  {path: 'gallery', component: GalleryComponent},
  {path: 'manager', component: ManagerComponent},
  {path: '', redirectTo: '/gallery', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CloudinaryModule.forRoot(cloudinary, CloudinarySettings),
    FileUploadModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
