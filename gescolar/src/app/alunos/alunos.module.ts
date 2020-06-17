import { AngularValidateBrLibModule } from 'angular-validate-br';
import { NgModule } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { AlunosCadastroComponent } from './alunos-cadastro/alunos-cadastro.component';
import { AlunosPesquisaComponent } from './alunos-pesquisa/alunos-pesquisa.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { AccordionModule } from 'primeng/accordion';
import {  DropdownModule, FieldsetModule,
    FileUploadModule, InputMaskModule, RadioButtonModule, ProgressSpinnerModule } from 'primeng';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlunosRoutingModule } from './alunos-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularValidateBrLibModule,

    InputTextModule,
    ButtonModule,
    DataViewModule,

    HttpClientModule,
    AccordionModule,
    ButtonModule,
    CheckboxModule,

    DialogModule,
    DropdownModule,
    FieldsetModule,
    FileUploadModule,
    InputMaskModule,
    InputTextModule,
    RadioButtonModule,
    TableModule,
    ProgressSpinnerModule

  ],
  declarations: [AlunosPesquisaComponent, AlunosCadastroComponent]
})
export class AlunosModule { }
