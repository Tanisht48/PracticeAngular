import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-rxjs',
  templateUrl: './subject-rxjs.component.html',
  styleUrl: './subject-rxjs.component.scss'
})
export class SubjectRXJSComponent implements OnInit {
  sourceSubject = new Subject();
  behaviourSubject =new BehaviorSubject<string>('Default');
  replaySubject = new ReplaySubject(4 );
  ngOnInit(): void {
    //this.handleSubject();
    // this.handleBehSubject()
       this.handleReplaySubject()
  }
 
  private handleReplaySubject(){
    this.replaySubject.next('This is the Start');
    this.replaySubject.next('This is the begining');
    this.replaySubject.next('This is the present');
    this.replaySubject.next('This is the end');
    this.replaySubject.subscribe((it)=>console.warn('replay',it));
    this.replaySubject.next('This is the ');
  }

  private handleBehSubject(){
    this.behaviourSubject.next('The new System')
    this.behaviourSubject.subscribe((user1) => console.warn('observer1 ',user1))
    this.behaviourSubject.subscribe((user1) => console.warn('observer2 ',user1))
  }


  private handleSubject() {
   

    this.sourceSubject.subscribe((user1) => console.warn('observer1 ',user1))
    this.sourceSubject.subscribe((user1) => console.warn('observer2 ',user1))
    
    this.sourceSubject.next('a Value');
  }
}
