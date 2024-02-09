import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private name: string = "Chandra";
  private prefix: string = "MR";

  color = "red"

  public status: string = "Online";
  public showStatus: boolean = true;
  // public fullName: string = `${this.prefix} ${this.name}`;

  get fullName() {
    return `${this.prefix} ${this.name}`;
    // return this.prefix + this.name;
  }

  constructor(private shareDateSerice: SharedDataService) { }

  ngOnInit(): void {
    this.shareDateSerice.sharedData.subscribe(res => {
      this.color = res;
    })
  }


}


