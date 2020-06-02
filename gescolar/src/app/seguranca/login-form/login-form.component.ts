import { Router } from '@angular/router';
import { Component, OnInit, Renderer2, ɵCodegenComponentFactoryResolver,  } from '@angular/core';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {


  emAndamento = false;

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  login(usuario: string, senha: string) {
    this.emAndamento = true;
    this.auth.login(usuario, senha)
      .then(() => {
        this.router.navigate(['/professores']);
      })
      .catch(erro => {
        console.log("teste..");
        
        this.emAndamento = false;
        this.errorHandler.handle(erro);
      });
  }


  

 

}
