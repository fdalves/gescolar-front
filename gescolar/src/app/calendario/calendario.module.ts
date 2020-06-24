import { FullCalendarModule } from 'primeng/fullcalendar';
import { CalendarioRoutingModule } from './calendario-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioGeralComponent } from './calendario-geral/calendario-geral.component';

import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [CalendarioGeralComponent],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    CalendarioRoutingModule,
    FullCalendarModule
  ]
})
export class CalendarioModule { }
