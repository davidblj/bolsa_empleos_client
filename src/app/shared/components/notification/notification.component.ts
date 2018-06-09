import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  @Input()
  appliedJobsCounter;

  constructor(private router: Router) { }

  onNotificationClick() {
    this.router.navigate(['/candidatos', 'ofertas'])
  }
}
