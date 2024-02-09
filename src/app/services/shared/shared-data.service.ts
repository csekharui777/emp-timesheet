import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private dataSource = new BehaviorSubject("");
  public sharedData = this.dataSource.asObservable();
  constructor() { }
  public changesData(data:any){
    this.dataSource.next(data);
  }
}
