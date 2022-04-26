import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <h1>New Event</h1>
    <hr />
    <div class="col-md-6">
      <h3>Create Event goes here</h3>
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default" (click)="cancel()">
        Cancel
      </button>
    </div>
  `,
})
export class CreateEventComponent {
  isDirty: boolean = false;
  constructor(private router: Router) {}

  cancel() {
    this.isDirty = true;
    this.router.navigate(['/events']);
  }
}
