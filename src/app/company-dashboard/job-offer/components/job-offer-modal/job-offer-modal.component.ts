import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-job-offer-modal',
  templateUrl: './job-offer-modal.component.html',
  styleUrls: ['./job-offer-modal.component.scss']
})
export class JobOfferModalComponent implements OnInit {

  message: string;
  error;

  constructor(public modalRef: BsModalRef) { }

  ngOnInit() {
  }

  get header() {
    return this.error ? 'error' : 'gracias';
  }
}
