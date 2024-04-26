import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appConfig.service';
import { HttpClientModule } from '@angular/common/http';
import { SubjectRXJSComponent } from './subject-rxjs/subject-rxjs.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppNavComponent } from './app-nav/app-nav.component';
import { NotFoundModule } from './not-found/not-found.module';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';
import { AddRoomsComponent } from './rooms/add-rooms/add-rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    SubjectRXJSComponent,
    AppNavComponent,
    RoomBookingComponent,
    AddRoomsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NotFoundModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    provideAnimationsAsync(),
   
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
