import { Directive, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

// manipulating the DOM element
// Angular Directives - default directives
// Attribute Directive - modify or alter the appearance and behavior of an element.
// Structural Directive - shape or reshape the DOM’s structure, typically by adding, removing, or manipulating elements.
@Directive({
  selector: '[appSuccessBtn]'
})
export class SuccessBtnDirective implements OnInit, OnChanges, OnDestroy {
  @Input()
  defaultColor!: string | undefined;;
  @Input('myHighlight') 
  highlightColor: string | undefined;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    console.log("1")
    this.highlight(this.defaultColor || 'red')
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("2")
   
  }
  ngOnDestroy(): void {
    console.log("3")
    
  }  

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
