import { AfterViewInit, Component, Inject, OnInit, Optional, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { LocalStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'hotelInventory1';

  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef; 
 // @ViewChildren(HeaderComponent) headerChildrenComponent: QueryList<HeaderComponent>;
  
  constructor(@Optional() private loggerService: LoggerService, 
  @Inject(LocalStorageToken) private localStorage: Storage ){ 

  }


  ngOnInit() {
    this.loggerService?.Log('AppComponent.ngOnint()');//it will only check if the legger service exist

    this.localStorage.setItem('name','ANything');
  }
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms = 50; 
    
    //console.log('34895389453',this.headerChildrenComponent)
  }
} 
