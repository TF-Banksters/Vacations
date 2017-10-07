import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tf-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  viewDate: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
