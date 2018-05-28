import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-pick-profile',
  templateUrl: './sign-up-pick-profile.component.html',
  styleUrls: ['./sign-up-pick-profile.component.scss']
})
export class SignUpPickProfileComponent implements OnInit {

  buttonColor = 'dark';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  navigateTo(url: string) {
    this.router.navigate([url], {relativeTo: this.activatedRoute});
  }
}
