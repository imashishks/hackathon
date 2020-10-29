import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[hack-tags]',
})
export class TagsDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList += ' tags';
  }
}
