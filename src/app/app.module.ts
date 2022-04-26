import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { appRoutes } from '../routes';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
// Events pages
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';

import { Error404Component } from './errors/404.component';

// Services
import { EventService } from './events/shared/event.service';
import { ToastService } from './common/toastr.service';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    EventsAppComponent,
    NavBarComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  providers: [
    EventService,
    ToastService,
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty === true) {
    return confirm('Do you really want to leave this Page.');
  }
  return false;
}
