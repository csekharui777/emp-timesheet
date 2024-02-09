import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appToggleElement]'
})
export class ToggleElementDirective {
  @Input() show:boolean = false;
  constructor() { }



}
