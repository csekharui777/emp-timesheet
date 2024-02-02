import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit, OnChanges, OnDestroy  {
  @Input() type: string | undefined;
  name:string = "sss";
  constructor() { } // - 1

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  ngDoCheck(): void{
    console.log("ngDoCheck")
  }

  ngOnChanges(): void { // -1
    console.log("ngOnChanges", this.type)
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(): void	{
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit(): void{
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(): void{
    console.log("ngAfterViewChecked")
  }


  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
