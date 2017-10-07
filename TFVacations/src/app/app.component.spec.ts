import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule } from 'angular-calendar';
import { UsersService } from './user-list/users.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CalendarComponent,
        UserListComponent
      ],
      imports: [
        CalendarModule.forRoot(),
        HttpClientModule
      ],
      providers: [
        UsersService,
        HttpClient
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
