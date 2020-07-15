import { CalendarioService } from './../calendario/calendario.service';
import { ChamadaService } from './../chamada/chamada.service';
import { TurmaService } from './../turma/turma.service';
import { AlunosService } from './../alunos/alunos.service';
import { ToastModule } from 'primeng/toast';
import { ProfessorService } from './../professores/professor.service';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { ErrorHandlerService } from './error-handler.service';
import { AuthService } from '../seguranca/auth.service';
import { GescolarHttp } from '../seguranca/gescolar-http';
import { GrowMessageService } from '../shared/grow-message.service';

import { MenuService } from '../app.menu.service';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ResponsavelService } from '../alunos/responsavel.service';





@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ConfirmDialogModule,
    ToastModule,
    ],
  declarations: [
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  exports: [
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [
    ErrorHandlerService,
    AuthService,
    ConfirmationService,
    GescolarHttp,
    GrowMessageService,
    ProfessorService,
    AlunosService,
    ResponsavelService,
    MenuService,
    ChamadaService,
    ConfirmationService,
    MessageService,
    JwtHelperService,
    Title,
    TurmaService,
    CalendarioService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
