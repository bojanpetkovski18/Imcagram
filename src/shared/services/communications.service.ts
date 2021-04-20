import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationsService {
  observer = new Subject();

  constructor() {}

  public deliver(data: any) {
    this.observer.next(data);
  }

  public recieve() {
    return this.observer.asObservable();
  }
}
