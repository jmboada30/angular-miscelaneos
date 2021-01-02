import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[appStandOut]',
})
export class StandOutDirective {
  @Input('appStandOut') newColor: string
  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') mouseEnter() {
    this.standO(this.newColor)
  }

  @HostListener('mouseleave') mouseLeave() {
    this.standO(null)
  }
  private standO(color: string = 'yellow') {
    this.el.nativeElement.style.backgroundColor = color
  }
}
