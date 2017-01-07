import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  //bind to certain attribute off hosting element
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }

  //add listener event
  @HostListener('click') open() {
    this.isOpen = true;
  }

  //add listener event
  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }

  private isOpen = false;
}
