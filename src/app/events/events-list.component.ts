import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastService } from '../common/toastr.service';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventListComponent implements OnInit {
  events: any = {} as [];
  //private toastr: ToastService
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
}
