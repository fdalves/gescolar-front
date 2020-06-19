import { AppMainComponent } from './../app.main.component';
import { TurmaCadastroComponent } from './turma-cadastro/turma-cadastro.component';
import { TurmaPesquisaComponent } from './turma-pesquisa/turma-pesquisa.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes = [

    {
        path: '', component: AppMainComponent,
        children: [

            {
                path: 'turmas',
                component: TurmaPesquisaComponent
            },
            {
                path: 'turmas/nova',
                component: TurmaCadastroComponent
            },
            {
                path: 'turmas/:codigo',
                component: TurmaCadastroComponent,
            }
        ]
    },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TurmaRoutingModule { }
