import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../room_models/iroomList';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appConfig.service';
import { AppConfig } from '../../AppConfig/appConfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig ) { 
    console.log(this.config.apiEndpoint);
    console.log("Is It Initialized");
  }
roomList : RoomList[] = [
    {
      roomNo:1,  
      roomType: 'Standard',
      amenities: 'WiFi, TV, Air Conditioning',
      price: 100,
      photos: 'https://example.com/room1.jpg',
      checkinTime: new Date('2024-04-19T14:00:00Z'), // Assuming UTC time
     
  },
  { 
      roomNo:2,
      roomType: 'Deluxe',
      amenities: 'WiFi, TV, Air Conditioning, Mini Bar',
      price: 150,
      photos: 'https://example.com/room2.jpg',
      checkinTime: new Date('2024-04-19T15:00:00Z'), // Assuming UTC time
     
  },
  {
      roomNo:3,
      roomType: 'Suite',
      amenities: 'WiFi, TV, Air Conditioning, Mini Bar, Jacuzzi',
      price: 250,
      photos: 'https://example.com/room3.jpg',
      checkinTime: new Date('2024-04-19T16:00:00Z'), // Assuming UTC time
   
  },
  {
      roomNo:4,
      roomType: 'Standard',
      amenities: 'WiFi, TV, Air Conditioning',
      price: 120,
      photos: 'https://example.com/room4.jpg',
      checkinTime: new Date('2024-04-19T14:30:00Z'), // Assuming UTC time
    
  },
  {
      roomNo:5,
      roomType: 'Deluxe',
      amenities: 'WiFi, TV, Air Conditioning, Mini Bar',
      price: 180,
      photos: 'https://example.com/room5.jpg',
      checkinTime: new Date('2024-04-19T15:30:00Z'), // Assuming UTC time
  }    
     ];
  getRooms() {
     return this.roomList;
  }
}
