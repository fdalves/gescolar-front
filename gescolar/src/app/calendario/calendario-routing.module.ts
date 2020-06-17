import { AppMainComponent } from '../app.main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/seguranca/auth.guard';
import { CalendarioGeralComponent } from './calendario-geral/calendario-geral.component';




const routes: Routes = [


  { path: '', component: AppMainComponent,
  children: [
    {
        path: 'calendario',
        component: CalendarioGeralComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_ADM'] }
      }
  ]},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CalendarioRoutingModule { }
