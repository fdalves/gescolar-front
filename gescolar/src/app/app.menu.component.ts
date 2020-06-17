import { AuthService } from './seguranca/auth.service';
import {Component, OnInit} from '@angular/core';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppMainComponent, private authService: AuthService) {}

    ngOnInit() {
        if (this.authService.jwtPayload.tipoUsuario.descTipoUsuario === 'ADM') {
            this.model = [

                {
                  label: 'Cadastros', icon: 'settings',
                  items: [
                      {label: 'Professores', icon: 'label', routerLink: ['/professores'] },
                      {label: 'Alunos', icon: 'label', routerLink: ['/alunos']},
                      {label: 'Turmas', icon: 'label', routerLink: ['/turmas']},
                  ]
              },

              {
                label: 'Calendario', icon: 'settings',
                items: [
                    {label: 'Calendario Escolar', icon: 'label', routerLink: ['/calendario'] }
                ]
            },


              {
                  label: 'Chamada', icon: 'list',
                  items: [
                    {label: 'Chamada Aluno', icon: 'list', routerLink: ['/chamadaAluno']} ,
                    {label: 'Chamada', icon: 'list', routerLink: ['/chamada/nova']},
                    {label: 'Chamada Pesquisa', icon: 'list', routerLink: ['/chamada']},
                  ]
              },
        ];
        }
    }

    onMenuClick() {
        this.app.menuClick = true;
    }
}
