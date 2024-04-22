import { Component,Self } from '@angular/core';
import { RoomsService } from '../rooms/Services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers: [RoomsService]
})
export class EmployeeComponent {
 empName = 'John';

 constructor(@Self() private roomService: RoomsService ) { }
}
 