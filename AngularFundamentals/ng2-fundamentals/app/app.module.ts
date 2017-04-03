
/**
 * Created by phuc.ngo on 3/04/2017.
 */
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {EventsAppComponent} from './events-app.component'
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {NavBarComponent} from "./nav/navbar.component";
import {EventService} from "./events/shared/event.service";
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './route';
import { RouterModule } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
@NgModule({
    imports: [BrowserModule,RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent, EventsListComponent, EventThumbnailComponent,EventDetailsComponent, NavBarComponent],
    providers:[EventService,ToastrService],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}