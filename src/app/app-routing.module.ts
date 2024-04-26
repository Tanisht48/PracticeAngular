import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HeaderComponent } from './header/header.component';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';
import { AddRoomsComponent } from './rooms/add-rooms/add-rooms.component';

const routes: Routes = [
  {path: 'header',component:HeaderComponent},
  {path: 'employee', component:EmployeeComponent},
  {path: 'rooms', component:RoomsComponent},
  {path: 'rooms/:id',component:RoomBookingComponent},
  {path: 'addRooms',component:AddRoomsComponent},
  {path:'',redirectTo:'/header',pathMatch:'full'},
  { path: 'not-found',
         loadChildren: () =>
        import('./not-found/not-found.module').then((m)=>m.NotFoundModule)
  },
  {path:'**',redirectTo:'/not-found'}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
