import { Component, ElementRef, ViewChild } from '@angular/core';
import { FileInputComponent } from '../../../../../shared/components/file-input/file-input.component';

@Component({
  selector: 'app-resumee',
  templateUrl: './resumee.component.html',
  styleUrls: ['./resumee.component.scss']
})
export class ResumeeComponent extends FileInputComponent {

  fileMessage = 'Selecciona tu hoja de vida';
  errorMessage = 'Solamente archivos .pdf';
  error: boolean;

  @ViewChild('fileInput')
  file: ElementRef;

  regex = /^application\/pdf/;

  onClick() {
    this.file.nativeElement.click();
  }

  updateMessages(valid: boolean, file) {
    if (valid) {
      this.fileMessage = file.name;
      this.error = false;
    } else {
      this.fileMessage = this.errorMessage;
      this.error = true;
    }
  }
}

