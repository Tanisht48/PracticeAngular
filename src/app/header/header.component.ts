import { Component, Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoggerService } from '../logger.service';
import { MessageService } from '../MessageService/message.service';
import { RoomsService } from '../rooms/Services/rooms.service';
import { HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
// @Injectable({
//   providedIn: 'root'
// })

export class HeaderComponent implements OnInit {
   title : string = "Angular Practice";
   response : JSON;
    totalBytes:number = 0; //Where There is Nothing U cannot add anything
    
   constructor(private logger : LoggerService, private messageService : MessageService,private roomService: RoomsService ) {}
  ngOnInit(): void {
    this.roomService.getPhotos().subscribe((event) =>{
      switch(event.type) {
        case HttpEventType.Sent: {
          console.log('Request Has Been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request Success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
      
    })
  }
   
   
   sendMessage(){
    console.warn('is this working')
      this.messageService.sendMessage('Hello From Header')
    }

    
}
