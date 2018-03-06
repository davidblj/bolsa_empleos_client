import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  logoMessage = 'Sube el logo de tu empresa';
  typeMessage = ' (PNG, JPG o JPEG)';

  message = this.logoMessage;
  hint = '';

  @Output()
  upload = new EventEmitter<File>();

  onFileUpload(event) {
    const file: File = this.retrieveFile(event);
    const valid = this.checkFileType(file);
    this.updateMessages(valid, file);

    if (valid) {
      this.upload.emit(file);
    } else {
      this.upload.emit(null);
    }
  }

  retrieveFile(event): File {
    const input: HTMLInputElement = event.target;
    const files: FileList = input.files;
    return files[0];
  }

  checkFileType(file: File): boolean {
    const type: string = file.type;
    const regex = /^image\/(jpg|png|jpeg)$/;
    return regex.test(type);
  }

  updateMessages(valid: boolean, file: File) {
    if (valid) {
      this.message = file.name;
      this.hint = '';
    } else {
      this.message = this.logoMessage;
      this.hint = this.typeMessage;
    }
  }
}
