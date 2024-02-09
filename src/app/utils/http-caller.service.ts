import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URI } from './../constants/index';
const headers = {};
@Injectable({
  providedIn: 'root'
})
export class HttpCallerService {
  uri: string = "";
  constructor(private httpClient: HttpClient) { }

  setUri(uri: string): void {
    // localhost:3000/v1/api/timesheet
    this.uri = `${API_URI}/${uri}`;
  }

  post(data: any): any {
    return this.httpClient.post(this.uri, data, headers);
  }

  getAll(): any {
    return this.httpClient.get(this.uri, headers);
  }

  get(id: string): any {
    return this.httpClient.get(`${this.uri}/${id}`, headers);
  }

  update(id: string, data: any): any {
    return this.httpClient.put(`${this.uri}/${id}`, data, headers);
  }

  patch(id: string, data: any): any {
    return this.httpClient.patch(`${this.uri}/${id}`, data, headers);
  }

  delete(id: string): any {
    return this.httpClient.delete(`${this.uri}/${id}`, headers);
  }
}
