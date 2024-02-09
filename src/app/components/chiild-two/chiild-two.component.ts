import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared/shared-data.service';

@Component({
  selector: 'app-chiild-two',
  templateUrl: './chiild-two.component.html',
  styleUrls: ['./chiild-two.component.scss']
})
export class ChiildTwoComponent implements OnInit {

  @Output()
  inc = new EventEmitter<string>();

  @Output()
  dec = new EventEmitter<string>();
  constructor(private sharedService: SharedDataService) { }



  ngOnInit(): void {
    this.sharedService.sharedData.subscribe((res)=>{
      // alert("I am subscriber from the child two compoent and value is "+ res)
    })
  }
  add(){
   this.inc.emit();
  }
  minus(){
    this.dec.emit();
  }

}
