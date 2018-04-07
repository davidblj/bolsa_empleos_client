import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements OnInit {

  @Input()
  appAutoFocus: boolean;

  constructor(private elem: ElementRef) { }

  ngOnInit() {

    if (this.appAutoFocus) {
      this.elem.nativeElement.focus();
    }
  }
}
