import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpCallerService } from 'src/app/utils/http-caller.service';
import { Observable } from 'rxjs';
const url = "";
const headers = {};
@Injectable({
  providedIn: 'root'
})
export class TimesheetApiService {

  constructor(private httpCaller: HttpCallerService) {
    this.httpCaller.setUri("news");
  }
  add(data: any): any {
    return this.httpCaller.post(data);
  }

  getAll(): Observable<any> {
    return this.httpCaller.getAll();
  }

  get(id: string): any {
    return this.httpCaller.get(`${url}/${id}`);
  }

  // constructor(private httpClient: HttpClient) { }

  // add(data: any): any {
  //   return this.httpClient.post(url,data,headers);
  // }

  // getAll(): any {
  //   return this.httpClient.get(url,headers);
  // }

  // get(id:string): any {
  //   return this.httpClient.get(`${url}/${id}`,headers);
  // }

  // update(id:string, data: any): any {
  //   return this.httpClient.put(`${url}/${id}`, data, headers);
  // }

  // patch(id:string, data: any): any {
  //   return this.httpClient.patch(`${url}/${id}`, data, headers);
  // }

  // delete(id:string): any {
  //   return this.httpClient.delete(`${url}/${id}`, headers);
  // }


}
