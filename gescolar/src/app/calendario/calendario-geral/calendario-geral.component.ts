import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProfessorService } from './../../professores/professor.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { TurmaService } from './../../turma/turma.service';
import { SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';



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
    turmas: SelectItem[];
    professores: SelectItem[];
    notificacoes: any[];
    cols: any[];
    disableSelect = true;
    formulario: FormGroup;

    constructor(private turmaService: TurmaService,
                private professorService: ProfessorService,
                private fb: FormBuilder,
                private errorHandler: ErrorHandlerService) { }

    ngOnInit(): void {

        this.configuraFormulario();
        this.formulario.controls.selectedOpcao.setValue('GERAL');
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




        this.carregarTurmas();
        this.carregaProf();
    }


    configuraFormulario() {
        this.formulario = this.fb.group({
          selectedOpcao: [],
          descEvento: new FormControl('', Validators.compose([Validators.required])),
          dataIniEvento: new FormControl('', Validators.compose([Validators.required])),
          dataFimEvento: new FormControl('', Validators.compose([Validators.required])),
          professoresSelecionados: [],
          turmasSelecionados: [],
        });
      }


      salvar() {
        console.log('entrou..');
        console.log(this.formulario.value);
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
        if (this.formulario.controls.selectedOpcao.value === 'SELECT') {
            this.disableSelect = false;
        } else {
            this.disableSelect = true;
            this.formulario.controls.professoresSelecionados.setValue(null);
            this.formulario.controls.turmasSelecionados.setValue(null);
        }
    }

}
