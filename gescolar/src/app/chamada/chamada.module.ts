import { NgModule } from '@angular/core';
import { ChamadaCadastroComponent } from './chamada-cadastro/chamada-cadastro.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { SharedModule } from './../shared/shared.module';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';

import { ButtonModule } from 'primeng/button';
import { InputTextModule, DataViewModule, DropdownModule, RadioButtonModule, SelectButtonModule, TableModule } from 'primeng';
import { CommonModule } from '@angular/common';

import { ChamadaPesquisaComponent } from './chamada-pesquisa/chamada-pesquisa.component';
import { ChamadaRoutingModule } from './chamada-routing.module';
import { ChamadaAlunoComponent } from './chamada-aluno/chamada-aluno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    ChamadaRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    InputTextModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    SharedModule,
    DataViewModule,
    DropdownModule,
    InputTextModule,
    MultiSelectModule,
    RadioButtonModule,
    SelectButtonModule,
    TableModule

  ],
  declarations: [ChamadaCadastroComponent, ChamadaPesquisaComponent, ChamadaAlunoComponent]
})
export class ChamadaModule { }
