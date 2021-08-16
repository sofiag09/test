import {
  AfterContentInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appFocusIndicator]'
})
export class FocusIndicatorDirective implements AfterContentInit {
  @Input() focusIndicatorTmpl: any;
  @HostListener('click', ['$event']) onClick(event) {
    this.markLabelAsSelected(event.target);
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.markLabelAsSelected(event.target);
    }
  }

  constructor(
    private el: ElementRef,
  ) {}

  ngAfterContentInit(): void {
    if (this.el.nativeElement.ariaSelected === "true") {
      this.markLabelAsSelected(this.el.nativeElement);
    }
  }

  public markLabelAsSelected(element) {
    if (element.ariaDisabled !== 'true') {
      const xOffset = element.offsetLeft;
      const width = element.clientWidth;
      this.focusIndicatorTmpl.style.cssText = `width: ${width}px; left: ${xOffset}px;`;
    }
  }

}
