import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  private messageSub = new BehaviorSubject<string>('');
 
  message$ = this.messageSub.asObservable();

  sendMessage(message: string) {
    this.messageSub.next(message);
  }

  constructor() { }
}
