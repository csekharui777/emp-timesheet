import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private name: string = "Chandra";
  private prefix: string = "MR";
  // public fullName: string = `${this.prefix} ${this.name}`;

  get fullName() {
    return `${this.prefix} ${this.name}`;
    // return this.prefix + this.name;
  }

  constructor() { }

  ngOnInit(): void {
  }

}


