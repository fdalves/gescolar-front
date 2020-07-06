import { ProfessorService } from './../../professores/professor.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { TurmaService } from './../../turma/turma.service';
import { SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import allLocales from '@fullcalendar/core/locales-all';


@Component({
    selector: 'app-calendario-geral',
    templateUrl: './calendario-geral.component.html',
    styleUrls: ['./calendario-geral.component.css']
})
export class CalendarioGeralComponent implements OnInit {

    display: boolean;
    fullcalendarOptions: any;
    events: any[];
    opcoes: SelectItem[];
    selectedOpcao: any;
    dataIniEvento: Date;
    dataFimEvento: Date;
    turmas: SelectItem[];
    turmasSelecionados: SelectItem[];
    professores: SelectItem[];
    professoresSelecionados: SelectItem[];
    notificacoes: any[];
    cols: any[];
    disableSelect = true;

    constructor(private turmaService: TurmaService,
                private professorService: ProfessorService,
                private errorHandler: ErrorHandlerService) { }

    ngOnInit(): void {
        this.fullcalendarOptions = {
            locale: 'pt-br',
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            buttonText: {
                today: 'Hoje',
                month: 'Mês',
                week: 'Semana',
                day: 'Dia',
                list: 'lista'
            },
            header: {
                left: 'prev,next, today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }
        };


        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];


        this.opcoes = [
            {label:'Geral', value: 'GERAL'},
            {label:'Selecione Turma/Prof.', value: 'SELECT' }
        ];

        this.selectedOpcao = 'GERAL';


        this.carregarTurmas();
        this.carregaProf();
    }


    carregarTurmas() {
        return this.turmaService.listarTodas()
          .then(turmas => {
            this.turmas = turmas
              .map(t => ({ label: t.nome, value: t.codigo }));
          })
          .catch(erro => this.errorHandler.handle(erro));
      }


      carregaProf(): any {
        return this.professorService.listarTodas()
          .then(profs => {
            this.professores = profs
              .map(p => ({ label: p.nome, value: p.codigo }));
          })
          .catch(erro => this.errorHandler.handle(erro));
      }

    showModalDialog() {
        this.display = true;
    }

    selectTipoEvento() {
        if (this.selectedOpcao === 'SELECT') {
            this.disableSelect = false;
        } else {
            this.disableSelect = true;
            this.professoresSelecionados = null;
            this.turmasSelecionados = null;
        }
    }

}
