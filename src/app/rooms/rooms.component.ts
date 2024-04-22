import { AfterViewChecked, AfterViewInit, Component,  OnInit, SkipSelf, ViewChild } from '@angular/core';
import { Room } from './room_models/irooms';
import { RoomList } from './room_models/iroomList';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './Services/rooms.service';



@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',

})
export class RoomsComponent implements OnInit,AfterViewInit,AfterViewChecked {


    roomList : RoomList[] = [] ;
    hotelName = 'Taj Hotel ';
  numberOfRooms = 10;
  hiderooms = false;  
  title = "RoomList"
  rooms : Room= { 
    totalRooms:25,
    availableRooms:10,
    bookedRooms:5
  }
 @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
 
 
 constructor(private roomsService : RoomsService) { 
     
 }
  
   
 
     ngOnInit(): void { 
        this.roomList = this.roomsService.getRooms();
        console.log(this.headerComponent);
      
        

     }

  toggle(){
    this.hiderooms = !this.hiderooms;
    this.title = "Rooms List";
  }

  selectRoom(room : RoomList){
    console.log(room);
  }

  addRoom() {
    const room: RoomList = {
        roomNo:6,
        roomType : "Delux Room",
        amenities: "WiFi, TV, Air Conditioning, Mini Bar",
        price:500,
        photos:"https://example.com/room5.jpg",
        checkinTime: new Date('2024-07-19T15:30:00Z')
    
  }
  this.roomList = [...this.roomList, room];
 //this.roomList.push(room);

}

ngAfterViewInit(){
    this.headerComponent.title = "Room View";
}

ngAfterViewChecked (): void {

}

}
