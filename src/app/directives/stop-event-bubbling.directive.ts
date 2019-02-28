import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appStopEventBubbling]'
})
export class StopEventBubblingDirective {
  constructor() {}

  @HostListener('click') onClick() {
    event.stopPropagation();
    return false;
  }
}
