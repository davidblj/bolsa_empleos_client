import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FileInputComponent } from '../../../../shared/components/file-input/file-input.component';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-profile-file-input',
  templateUrl: './profile-file-input.component.html',
  styleUrls: ['./profile-file-input.component.scss']
})
export class ProfileFileInputComponent extends FileInputComponent {

  @Input()
  name: string;

  buttonShape = 'square';
  buttonHoverColor = 'none';

  validationMessage = null;
  successMessage = 'El archivo se reemplazo exitosamente. Para efectuar el cambio, actualiza tu perfil';
  failureMessage = 'Solamente archivos .pdf';
  error = false;

  @ViewChild('fileInput')
  file: ElementRef;

  regex = /^application\/pdf/;

  onSubmitHandler() {
    this.file.nativeElement.click();
  }

  updateMessages(valid: boolean, file) {

    if (valid) {
      this.validationMessage = this.successMessage;
      this.error = false;
    } else {
      this.validationMessage = this.failureMessage;
      this.error = true;
    }
  }

  get sanitizedFileName() {

    const filename = this.name.toLowerCase().replace(/\s/g, '_');
    return filename.concat('.pdf');
  }

  resetMessaging() {
    this.validationMessage = null;
  }
}
