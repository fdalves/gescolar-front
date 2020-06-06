import { ProfessorService } from './../professores/professor.service';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule, ConfirmationService, MessageService } from 'primeng';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { ErrorHandlerService } from './error-handler.service';
import { AuthService } from '../seguranca/auth.service';
import { GescolarHttp } from '../seguranca/gescolar-http';
import { GrowMessageService } from '../shared/grow-message.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Title } from '@angular/platform-browser';
import { MenuService } from '../app.menu.service';





@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ConfirmDialogModule,
    ],
  declarations: [
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  exports: [
    ConfirmDialogModule,
  ],
  providers: [
    ErrorHandlerService,
    AuthService,
    ConfirmationService,
    GescolarHttp,
    GrowMessageService,
    JwtHelperService,
    Title,
    MessageService,
    ProfessorService,
    MenuService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
