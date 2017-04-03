/**
 * Created by phuc.ngo on 3/04/2017.
 */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent} from './events-app.component'
@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponent],
    bootstrap:[EventsAppComponent]
})
export class AppModule {

}