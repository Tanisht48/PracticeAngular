import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../room_models/iroomList';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appConfig.service';
import { AppConfig } from '../../AppConfig/appConfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig,
 private http : HttpClient) { 
    console.log(this.config.apiEndpoint);
    console.log("Is It Initialized");
  }

  getRooms() {
    //console.log(this.http.get('/roomsList'));
     return this.http.get<RoomList[]>('/roomList');
  }

  addRooms(room : RoomList) {
    return this.http.post<RoomList>('/roomList',room)
  }
}
