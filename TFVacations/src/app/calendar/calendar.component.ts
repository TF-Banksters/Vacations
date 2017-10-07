import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from "calendar-utils/dist/calendar-utils";
import { addDays } from 'date-fns';
import { colors } from '../colors';

@Component({
  selector: 'app-tf-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: '',
      color: colors.yellow,
      start: new Date(),
      end: addDays(new Date(), 1)
    },
    {
      title: '',
      color: colors.blue,
      start: new Date(),
      end: addDays(new Date(), 1)
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
