import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared/shared-data.service';

@Component({
  selector: 'app-chiild-one',
  templateUrl: './chiild-one.component.html',
  styleUrls: ['./chiild-one.component.scss']
})
export class ChiildOneComponent implements OnInit {
   @Input()
   name: string | undefined;

  @Output()
  passDateToParent = new EventEmitter<string>();
   
  toggleElement: boolean = false;
  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.passDateToParent.emit("I am from Child one COmponent")
  }

  clickEvent(data:any){
    this.sharedDataService.changesData(data)
  }

  showAndHide(): void{

  }

}
