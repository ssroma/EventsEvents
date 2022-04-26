import { Component } from '@angular/core';

@Component({
  selector: 'events-app-root',
  template: `
    <navbar-app></navbar-app>
    <router-outlet></router-outlet>
    <!-- <events-list></events-list> -->
  `,
  styles: [],
})
export class EventsAppComponent {}
