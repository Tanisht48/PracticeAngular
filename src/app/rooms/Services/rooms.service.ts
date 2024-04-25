import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../room_models/iroomList';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appConfig.service';
import { AppConfig } from '../../AppConfig/appConfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList : RoomList[] = [];
  headers = new HttpHeaders({token:'uwhyjsefjhkbskndbfjwbdesfje'});  
  getRooms$ = this.http.get<RoomList[]>('/roomList',{
    headers: this.headers
  }).pipe(
    shareReplay(1)
  );

  
  // getRooms$$ = this.http.get<RoomList[]>('/api/roomList/hjfbdvjkhb').pipe(
  //   shareReplay(1)
  // );


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

  getPhotos() {
    const request = new HttpRequest('GET','https://jsonplaceholder.typicode.com/photos',{
      reportProgress: true, 
    });
    return this.http.request(request);
  }
 
}
