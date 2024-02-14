import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AdhaarmaskPipe } from 'src/app/adhaarmask.pipe';
import { TimesheetApiService } from 'src/app/services/api/timesheet-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  count = 0;

  latestNews:any = [];

  increment() {
    this.count = this.count + 1
  }

  decrement() {
    this.count = this.count - 1
  }


  public adhaarData = [{
    isActive: true,
    name: "chandra sekhar",
    no: "1234 2345 2334"
  }, {
    isActive: false,
    name: "Phani",
    no: "1234 2345 1267"
  }]

  oneName = "Chandra Sekhar Kalidindi"

  v = new Promise((res, err) => res(3))

  getChildDate(data: any) {
    // alert("This alert from parent componet with child data "+ data)
  }

  constructor(private newsService: TimesheetApiService) {

  }

  ngOnInit(): void {
    this.newsService.getAll().subscribe((res) => {
      this.latestNews = res.data
    }, (error) => {
      // alert(error);
    })
  }

}
