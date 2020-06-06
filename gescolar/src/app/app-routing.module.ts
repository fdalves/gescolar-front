import { ProfessorCadastroComponent } from './professores/professor-cadastro/professor-cadastro.component';
import { AppMainComponent } from './app.main.component';
import { NgModule } from '@angular/core';



import { Routes, RouterModule } from '@angular/router';

import { NaoAutorizadoComponent } from './core/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';

export const routes: Routes = [
    { path: '', component: AppMainComponent,
        children: [
            { path: '', component: ProfessorCadastroComponent },

        ]
    },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


