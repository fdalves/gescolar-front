import { ToastModule } from 'primeng/toast';
import { AngularValidateBrLibModule } from 'angular-validate-br';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { ProfessorPesquisaComponent } from './professor-pesquisa/professor-pesquisa.component';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfessoresRoutingModule } from './professores-routing.module';
import { CommonModule } from '@angular/common';
import { InputMaskModule, DropdownModule, FieldsetModule, FileUploadModule, PanelMenuModule, RadioButtonModule, ProgressSpinnerModule } from 'primeng';



@NgModule({
  imports: [
    CommonModule,
    ProfessoresRoutingModule,
    AngularValidateBrLibModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,

    InputTextModule,
    ButtonModule,
    DataViewModule,
    InputMaskModule,
    BrowserModule,
    FormsModule,

    BrowserAnimationsModule,
    ButtonModule,


    DialogModule,
    DropdownModule,
    FieldsetModule,
    FileUploadModule,
    InputMaskModule,
    InputTextModule,
    PanelMenuModule,
    RadioButtonModule,
    TableModule,
    ProgressSpinnerModule,

  ],
  declarations: [ProfessorCadastroComponent,
    ProfessorPesquisaComponent]
})
export class ProfessoresModule { }
