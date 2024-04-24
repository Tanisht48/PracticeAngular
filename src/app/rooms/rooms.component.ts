import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, SkipSelf, ViewChild } from '@angular/core';
import { Rooms } from './room_models/irooms';
import { RoomList } from './room_models/iroomList';
import { Subscription } from 'rxjs';
import { MessageService } from '../MessageService/message.service';

import { RoomsService } from './Services/rooms.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',

})
export class RoomsComponent implements OnInit,AfterViewInit,OnDestroy {

  
  rooms$ = this.roomsService.getRooms$;

  roomList: RoomList[] = [];
  hotelName = 'Taj Hotel ';
  numberOfRooms = 10;
  hiderooms = false;
  title = "RoomList"
  rooms: Rooms = {
    totalRooms: 25,
    availableRooms: 10,
    bookedRooms: 5
  }


  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    //observer.error('error');

  })
   //@ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
   headerMessage: string;
   private messageSubscription: Subscription; 

  constructor(private roomsService: RoomsService , private messageService : MessageService ) {
    this.messageSubscription = this.messageService.message$.subscribe(message => {
      this.headerMessage = message;
  });
}
  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }
  ngAfterViewInit(): void {
    
  }
  
 ngOnInit(): void {  
    
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)
    });
    //this.stream.subscribe((data) => console.log(data));
    // this.roomsService.getRooms$.subscribe(room => {
    //   console.log("Is The Data Comming", room);
    //   this.roomList = room;
    // });
    //this.roomList = this.roomsService.getRooms();
    //console.log(this.headerComponent);
  }

  toggle() {
    this.hiderooms = !this.hiderooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    console.log(room);
  }

  addRoom() {
    const room: RoomList = {
      roomNo: 6,
      roomType: "Delux Room",
      amenities: "WiFi, TV, Air Conditioning, Mini Bar",
      price: 500,
      photos: "https://example.com/room5.jpg",
      checkinTime: new Date(Date.now()),
      isBooked: false

    }

    //this.roomList.push(room);
    this.roomsService.addRooms(room).subscribe((data) => {
      this.roomList = [...this.roomList, data];
    })
  }

 
 
  
}
