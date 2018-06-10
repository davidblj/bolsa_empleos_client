import { Component, Input, OnInit } from '@angular/core';
import { SubmitStatusService } from '../../../../sign-up/shared/submit-status.service';
import { SubmitStatus } from '../../../../sign-up/shared/submit-status.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-submit-status',
  templateUrl: './sign-up-submit-status.component.html',
  styleUrls: ['./sign-up-submit-status.component.scss']
})
export class SignUpSubmitStatusComponent implements OnInit {

  @Input()
  submitStatus: SubmitStatus;

  cardSize = 'extra-small';
  cardShape = 'rounded';

  constructor(private router: Router) { }

  ngOnInit() { }

  get status(): boolean {
    return this.submitStatus ? this.submitStatus.status : null;
  }

  get message() {
    return this.submitStatus ? this.submitStatus.message : null;
  }

  get footerTitle() {
    return this.submitStatus ? this.submitStatus.footer.title : null;
  }

  get link() {
    return this.submitStatus ? this.submitStatus.footer.url : null;
  }

  onClickHandler() {
    this.router.navigate([this.link]);
  }
}
