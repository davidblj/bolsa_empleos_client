import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applied-jobs-modal',
  templateUrl: './applied-jobs-modal.component.html',
  styleUrls: ['./applied-jobs-modal.component.scss']
})
export class AppliedJobsModalComponent implements OnInit {

  message = '¿Estas seguro que deseas eliminar tu solicitud hacia esta oferta?';

  constructor() { }

  ngOnInit() {
  }

}
