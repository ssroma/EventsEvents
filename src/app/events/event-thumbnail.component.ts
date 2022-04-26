import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{ event?.name }}</h2>
      <div><strong>Date:</strong> {{ event?.date }}</div>
      <!--<div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">-->
      <div [ngStyle]="getStartTimeClass()" [ngSwitch]="event?.time">
        <strong>Time:</strong> {{ event?.time }}
        <span class="pad-left" *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span class="pad-left" *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span class="pad-left" *ngSwitchCase="'8:00 am'">(Norma Start)</span>
      </div>
      <div><strong>Price:</strong> \${{ event?.price }}</div>

      <div *ngIf="event?.location">
        <span>Location: {{ event?.location?.address }}</span>
        <span class="pad-left"
          >{{ event?.location?.city }}, {{ event?.location?.country }}</span
        >
      </div>
      <div *ngIf="event?.onlineUrl">Online URL : {{ event?.onlineUrl }}</div>
    </div>
  `,
  styles: [
    `
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        padding-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  @Input() event: any;

  getStartTimeClass(): any {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    if (this.event && this.event.time === '8:00 am') {
      return { color: '#003300', 'font-weight': 'bold' };
    }
    return {}; //{ green: isEarlyStart, bold: isEarlyStart };
  }
}
