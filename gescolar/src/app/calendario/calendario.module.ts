import { InputTextModule } from 'primeng/inputtext';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { CalendarioRoutingModule } from './calendario-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioGeralComponent } from './calendario-geral/calendario-geral.component';

import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {SelectButtonModule} from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [CalendarioGeralComponent],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    CalendarioRoutingModule,
    FullCalendarModule,
    SelectButtonModule,
    CalendarModule,
    MultiSelectModule,
    InputTextModule,
    TabViewModule,
    TableModule
  ]
})
export class CalendarioModule { }
