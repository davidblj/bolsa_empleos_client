import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-input',
  template: ``
})
export class FileInputComponent {

  @Output()
  upload = new EventEmitter<File>();

  // this regex is in charge to
  // validate the file type
  regex: RegExp;

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
    return this.regex.test(type);
  }

  // messaging update utility
  updateMessages(valid: boolean, file: File) {
  }
}
