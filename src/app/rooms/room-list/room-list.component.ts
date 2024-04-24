import { Component ,EventEmitter,Input ,Output,ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { RoomList } from '../room_models/iroomList';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class RoomListComponent implements OnInit,OnChanges, OnDestroy{
 @Input()roomList : RoomList[] = [] ;
 
 @Input() title: string = '';

 @Output() selectedRoom = new EventEmitter<RoomList>();
 


   constructor() {
  
   };
   
   
   ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.title);
    if(changes['title']){
    this.title = changes['title'].currentValue.toUpperCase();
  }
}
  ngOnInit(): void {
    
  }
;
 
   selectRoom(room : RoomList) {
    this.selectedRoom.emit(room);
   }
 
  
   ngOnDestroy(): void {
    console.log('is OnDestroy Called')
   }
}
