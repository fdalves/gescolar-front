import { FullCalendarModule } from 'primeng/fullcalendar';
import { CalendarioRoutingModule } from './calendario-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioGeralComponent } from './calendario-geral/calendario-geral.component';



@NgModule({
  declarations: [CalendarioGeralComponent],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    FullCalendarModule
  ]
})
export class CalendarioModule { }
