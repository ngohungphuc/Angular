import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  private backgroundColor: string;
  @Input() defaultColor = 'white';
  //use 'highlight' for outside to access
  @Input('highlight') highlightColor = 'white';

  //add event listtener
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouselevave() {
    this.backgroundColor = this.defaultColor;
  }

  //readonly property should have
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  /* constructor(private elementRef: ElementRef, private renderer: Renderer) {
   this.elementRef.nativeElement.style.backgroundColor = 'green';
   this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
   }*/

}
