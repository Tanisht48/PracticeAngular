import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrl: './room-booking.component.scss'
})
export class RoomBookingComponent implements OnInit {


  constructor(private router : ActivatedRoute) { }
  
  id : number = 0;
  
  // id$ = this.router.params.pipe(map((params) => params['id']));
  id$ = this.router.paramMap.pipe(map((params) => params.get('id')));

  ngOnInit(): void {
    // this.id = this.router.snapshot.params['id'];//it will never recive a new data if its in same view  
    this.router.params.subscribe((params) => {this.id = params['id']});
  }


}
