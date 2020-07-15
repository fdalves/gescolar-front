import { DateValidators } from './../../shared/validators/date-validators';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProfessorService } from './../../professores/professor.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { TurmaService } from './../../turma/turma.service';
import { SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { GrowMessageService } from 'src/app/shared/grow-message.service';



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
    notificacoes: Array<any> = [];
    cols: any[];

    formulario: FormGroup;
    pt: any;

    constructor(private turmaService: TurmaService,
                private professorService: ProfessorService,
                private fb: FormBuilder,
                private errorHandler: ErrorHandlerService,
                private messageService: GrowMessageService) { }

    ngOnInit(): void {

        this.configuraFormulario();
        this.formulario.controls.selectedOpcao.setValue('GERAL');
        this.selectTipoEvento();
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


        this.pt = {
            firstDayOfWeek: 0,
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
              'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            today: 'Hoje',
            clear: 'Limpar'
          };

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
          dataInclude: [],
          datasNotificar: []
        }, { validator: Validators.compose([
            DateValidators.dateLessThan('dataIniEvento', 'dataFimEvento', { 'dataFimEvento': true })

        ])});
      }






      addData() {
        if (this.formulario.controls.dataIniEvento.value === '' || this.formulario.controls.dataFimEvento.value === '') {
            this.messageService.addErro("Os campos  dt. inicio evento e data fim evento são obrigatórios.");
            return;
        }

        if (this.formulario.controls.dataInclude.value >  this.formulario.controls.dataFimEvento.value ) {
            this.messageService.addErro("A data informada de ser menor que  data fim evento. ");
            return;
        }

        const dateTime = new Date();

        if (dateTime > this.formulario.controls.dataInclude.value ) {
            this.messageService.addErro("A data informada de ser menor que  data atual. ");
            return;
        }

        this.notificacoes.push({value: this.formulario.controls.dataInclude.value});
        this.formulario.controls.dataInclude.setValue(null);
      }

      excluiData(noti: any) {
        const index = this.notificacoes.indexOf(noti, 0);
        if (index > -1) {
            this.notificacoes.splice(index, 1);
        }


      }

      salvar() {
        console.log('entrou..');
        this.formulario.controls.datasNotificar.setValue(this.notificacoes);
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
            this.formulario.controls.professoresSelecionados.enable();
            this.formulario.controls.turmasSelecionados.enable();
        } else {
            this.formulario.controls.professoresSelecionados.disable();
            this.formulario.controls.turmasSelecionados.disable();
            this.formulario.controls.professoresSelecionados.setValue(null);
            this.formulario.controls.turmasSelecionados.setValue(null);
        }
    }

}


