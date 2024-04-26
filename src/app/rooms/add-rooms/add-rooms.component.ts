import { Component } from '@angular/core';
import { RoomList } from '../room_models/iroomList';
import { RoomsService } from '../Services/rooms.service';

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrl: './add-rooms.component.scss'
})
export class AddRoomsComponent {
    room: RoomList = {
      roomNo: 0 ,
      roomType: '',
      amenities: '',
      price: 0,
      photos: '',
      isBooked: false
    }
constructor(private roomService : RoomsService) {}

successMessage:string=''

  addRoom() {
    //this.roomList.push(room);
    this.roomService.addRooms(this.room).subscribe((data) => {
   this.successMessage = 'New Room Added Successfully'
    })
  }



  
}
