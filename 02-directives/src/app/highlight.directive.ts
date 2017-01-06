import {Directive, ElementRef, Renderer, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  private backgroundColor = 'white';

  //add event listtener
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouselevave() {
    this.backgroundColor = 'white';
  }

  //readonly property should have
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  /* constructor(private elementRef: ElementRef, private renderer: Renderer) {
   this.elementRef.nativeElement.style.backgroundColor = 'green';
   this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
   }*/

}
