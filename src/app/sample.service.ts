import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  // subject = new Subject<number>();
  // obs = new Observable((obs) => {
  //   obs.next("111")
  //   obs.next("222")
  //   // obs.error("err")
  //   obs.next("333")
  //   obs.complete()
  // } )
//   this.subject.subscribe({
//     next: (v) => console.log(`observerA: ${v}`),
//   });
//   this.subject.subscribe({
//     next: (v) => console.log(`observerB: ${v}`),
//   });

//   this.subject.next(1);

//   this.obs.subscribe({
//     next: (val) => {
// alert(val)
//     }, 
//     error : (er) => {
//       alert(er)
//     }, 
//     complete :() => {
//       alert("Cmpleted")
//     }
//   })

//   this.obs.subscribe({
//     next: (val) => {
// alert("SECON"+val)
//     }, 
//     error : (er) => {
//       alert(er)
//     }, 
//     complete :() => {
//       alert("SECON"+"Cmpleted")
//     }
//   })

}
