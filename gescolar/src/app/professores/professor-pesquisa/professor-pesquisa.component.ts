import { GrowMessageService } from './../../shared/grow-message.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { ProfessorFiltro, ProfessorService } from './../professor.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent, ConfirmationService } from 'primeng';


@Component({
  selector: 'app-professor-pesquisa',
  templateUrl: './professor-pesquisa.component.html',
  styleUrls: ['./professor-pesquisa.component.css']
})
export class ProfessorPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new ProfessorFiltro();
  professores = [];
  @ViewChild('tabela') grid;


  constructor(private title: Title,
              private professorService: ProfessorService,
              private errorHandler: ErrorHandlerService,
              private confirmation: ConfirmationService,
              private messageService: GrowMessageService) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de professores');
  }



  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.professorService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.professores = resultado.professores;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(professor: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(professor);
      }
    });
  }

  excluir(professor: any) {
    this.professorService.excluir(professor.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }

       this.messageService.addSucesso('Professor excluído com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
