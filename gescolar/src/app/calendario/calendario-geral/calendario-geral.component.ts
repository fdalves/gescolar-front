import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
@Component({
  selector: 'app-calendario-geral',
  templateUrl: './calendario-geral.component.html',
  styleUrls: ['./calendario-geral.component.css']
})
export class CalendarioGeralComponent implements OnInit {


fullcalendarOptions: any;
events: any[];

  constructor() { }

  ngOnInit(): void {

    this.fullcalendarOptions = {
        plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
        defaultDate: '2016-01-12',
        header: {
            left: 'prev,next, today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }
    };

  }

}
