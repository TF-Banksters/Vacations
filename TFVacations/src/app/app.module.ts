import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'angular-calendar';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersService } from './user-list/users.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    HttpClientModule
  ],
  providers: [UsersService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
