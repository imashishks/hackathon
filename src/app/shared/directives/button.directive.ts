import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ButtonModel } from '../models/config.model';

@Directive({
  selector: '[hack-button]',
})
export class ButtonDirective implements OnInit {
  @Input() config;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // el.nativeElement.style.backgroundColor = '#000';
  }
  defaultBtnSettings: ButtonModel = {
    type: 'primary',
    disabled: false,
  };
  ngOnInit() {
    this.config = { ...this.defaultBtnSettings, ...this.config };
    this.el.nativeElement.classList += ' button__base ' + this.config.type;
    if (!this.config.disabled) {
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    } else {
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
    }
  }
}
