import { Injectable } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Injectable()
export class ModalService {

  private modals: Array<ModalComponent>

  constructor() {
    this.modals = [];
  }

  registerModal(newModal: ModalComponent) {

    const modal = this.findModal(newModal.modalId);
    // delete an existing modal to replace a new
    if (modal) {
      this.modals.splice(this.modals.indexOf(modal));
    }
    this.modals.push(newModal);
  }

  open(modalId: string): void {
    const modal = this.findModal(modalId);

    if (modal) {
      modal.isOpen = true;
    }
  }

  private findModal(modalId: string): ModalComponent {

    for (const modal of this.modals) {
      if (modal.modalId === modalId) {
        return modal
      }
    }
    return null;
  }
}
