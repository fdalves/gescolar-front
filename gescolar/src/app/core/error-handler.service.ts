import { HttpErrorResponse } from '@angular/common/http';
import { NotAuthenticatedError } from './../seguranca/gescolar-http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';








@Injectable()
export class ErrorHandlerService {

  constructor(
    private router: Router,
    private messageService: MessageService,
  ) { }

  handle(errorResponse: any) {
    let msg: string;

    console.log(errorResponse);



    if (typeof errorResponse === 'string') {
      msg = errorResponse;

    } else if (errorResponse instanceof NotAuthenticatedError) {
      msg = 'Sua sessão expirou!';
      this.router.navigate(['/login']);

    } else if (errorResponse instanceof HttpErrorResponse
      && errorResponse.status >= 400 && errorResponse.status <= 499) {

      msg = 'Ocorreu um erro ao processar a sua solicitação';

      if (errorResponse.status === 403) {
        msg = 'Você não tem permissão para executar esta ação';
      }

      try {
        msg = errorResponse.error[0].mensagemUsuario;
      } catch (e) {
        msg = 'Erro ao processar serviço remoto. Tente novamente.';
        console.error('Ocorreu um erro', errorResponse);
      }




    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.error('Ocorreu um erro', errorResponse);
    }


    if (errorResponse.status === 400) {
      if (errorResponse.error.error === 'invalid_grant') {
        msg = 'Usuário ou senha inválida!';
      }
    }

    this.messageService.add({ severity: 'error', detail: msg });


  }

}
