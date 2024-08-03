import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  // constructor() { }

  // step 1

  count = 0

  getCounter(){
    return this.count;
  }

  incrementCounter(){
    this.count=this.count+1
  }

  DecrementCounter(){
    this.count=this.count-1
  }
}
