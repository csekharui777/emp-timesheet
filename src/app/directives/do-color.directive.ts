import { Directive, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDoColor]'
})
export class DoColorDirective implements OnInit, OnChanges, OnDestroy {
  @Input()
  color: string | undefined;

  constructor(private ele: ElementRef) { 
   
  }
  
  @HostListener("click")
  hostClick(){
    this.ele.nativeElement.style.backgroundColor= "yellow"
  }


  ngOnInit(): void {
    this.ele.nativeElement.style.backgroundColor= this.color;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    this.ele.nativeElement.style.backgroundColor= this.color;
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }


}
