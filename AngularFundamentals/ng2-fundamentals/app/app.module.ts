/**
 * Created by phuc.ngo on 3/04/2017. */
import {NgModule}from '@angular/core'
import {BrowserModule}from '@angular/platform-browser'
import {EventsAppComponent}from './events-app.component'
import {NavBarComponent}from "./nav/navbar.component";
import {ToastrService}from './common/toastr.service';
import {appRoutes}from './route';
import {RouterModule}from '@angular/router';
import {Error404Component}from "./errors/404.component";
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent
}from './events/index'
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        NavBarComponent,
        CreateSessionComponent,
        SessionListComponent
    ],
    providers: [EventService,
        ToastrService,
        EventRouteActivator,
        AuthService,
        EventListResolver, {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('Do you really want to cancel')
    return true;
}