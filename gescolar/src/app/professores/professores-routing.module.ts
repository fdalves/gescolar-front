import { NgModule } from '@angular/core';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorPesquisaComponent } from './professor-pesquisa/professor-pesquisa.component';
import { AuthGuard } from 'src/app/seguranca/auth.guard';




const routes: Routes = [
  {
    path: 'professores',
    component: ProfessorPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADM'] }
  },
  {
    path: 'professores/nova',
    component: ProfessorCadastroComponent
   },
  {
    path: 'professores/:codigo',
    component: ProfessorCadastroComponent,
   }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProfessoresRoutingModule { }
