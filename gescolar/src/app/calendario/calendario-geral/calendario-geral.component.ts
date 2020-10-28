import { AuthService } from './../../seguranca/auth.service';
import { CalendarioService } from './../calendario.service';
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
import { templateJitUrl } from '@angular/compiler';



@Component({
    selector: 'app-calendario-geral',
    templateUrl: './calendario-geral.component.html',
    styleUrls: ['./calendario-geral.component.css']
})
export class CalendarioGeralComponent implements OnInit {

    display: boolean;
    edit: boolean;
    fullcalendarOptions: any;
    events: any[];
    opcoes: SelectItem[];
    turmas: SelectItem[];
    professores: SelectItem[];
    notificacoes: Array<any> = [];
    cols: any[];
    turmasFiltro: any[];
    professoresFiltro: any[];

    formulario: FormGroup;
    pt: any;

    constructor(private turmaService: TurmaService,
                private professorService: ProfessorService,
                private fb: FormBuilder,
                private errorHandler: ErrorHandlerService,
                private messageService: GrowMessageService,
                private calendarioService: CalendarioService,
                private authService: AuthService) { }

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
            },

            eventClick: (e) =>  {
                const id = e.event.id;
                this.calendarioService.loadEvento(id)
                .then(evento => {
                    console.log(evento);
                    this.display = true;
                    this.edit = true;
                    this.setaEvento(evento);
                }).catch(erro => this.errorHandler.handle(erro));
            },

            editable: true

        };


        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];


        this.opcoes = [
            { label: 'Geral', value: 'GERAL' },
            { label: 'Selecione Turma/Prof.', value: 'ESPECIFICA' }
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
        this.carregarEvento();
    }


    setaEvento(evento: any) {
        this.formulario.controls.descEvento.setValue(evento.title);
        this.formulario.controls.dataIniEvento.setValue(this.parseStrToDate(evento.start));
        this.formulario.controls.dataFimEvento.setValue(this.parseStrToDate(evento.end));
    }


    cancela() {
       this.display = false;
       this.edit = false;
       this.formulario.reset();
    }

    parseStrToDate(str: any): any {
        const dtIni =  str;
        const dt = dtIni.substring(0, 10);
        const time = dtIni.substring(11, 20);
        const date: Date = new Date(dt);
        date.setHours(time.substring(0, 2));
        date.setMinutes(time.substring(3, 5));
        date.setDate(date.getDate() + 1);
        return date;
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
            datasNotificar: [],
            dataIni: [],
            dataFim: [],
            codigoUsuario: []
        }, {
            validator: Validators.compose([
                DateValidators.dateLessThan('dataIniEvento', 'dataFimEvento', { 'dataFimEvento': true })

            ])
        });
    }


    selectProfessor() {
        this.calendarioService.carregarEventos(this.turmasFiltro, this.professoresFiltro)
        .then(eventos => {
            this.events = eventos;
            console.log(this.events);
        }).catch(erro => this.errorHandler.handle(erro));
    }

    selectTurma() {
         this.calendarioService.carregarEventos(this.turmasFiltro, this.professoresFiltro)
        .then(eventos => {
            this.events = eventos;
            console.log(this.events);
        }).catch(erro => this.errorHandler.handle(erro));
    }


    addData() {
        if (this.formulario.controls.dataIniEvento.value === '' || this.formulario.controls.dataFimEvento.value === '') {
            this.messageService.addErro("Os campos  dt. inicio evento e data fim evento são obrigatórios.");
            return;
        }

        if (this.formulario.controls.dataInclude.value > this.formulario.controls.dataFimEvento.value) {
            this.messageService.addErro("A data informada deve ser menor que data fim evento. ");
            return;
        }

        const dateTime = new Date();

        if (dateTime > this.formulario.controls.dataInclude.value) {
            this.messageService.addErro("A data informada deve ser maior que data atual. ");
            return;
        }

        this.notificacoes.push({ value: this.formulario.controls.dataInclude.value });
        this.formulario.controls.dataInclude.setValue(null);
    }

    excluiData(noti: any) {
        const index = this.notificacoes.indexOf(noti, 0);
        if (index > -1) {
            this.notificacoes.splice(index, 1);
        }


    }


    parseDate(date: any){
        const day = this.addZero(date.getDate());
        const month = this.addZero(date.getMonth() + 1); // add 1 because months are indexed from 0
        const year = date.getFullYear();
        const hours = this.addZero(date.getHours());
        const  minute  = this.addZero(date.getMinutes());
        const result = day + '/' + month + '/' + year + ' ' + hours + ':' + minute;
        return result;
    }

     addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }

    salvar() {
        this.formulario.controls.dataIni.setValue(this.parseDate(this.formulario.controls.dataIniEvento.value));
        this.formulario.controls.dataFim.setValue(this.parseDate(this.formulario.controls.dataFimEvento.value));
        this.formulario.controls.codigoUsuario.setValue(this.authService.jwtPayload.codigoUsuario);

        let arraydatas: any[] = new Array();
        for (let x of this.notificacoes) {
            arraydatas.push(this.parseDate(x.value));
        }

        this.formulario.controls.datasNotificar.setValue(arraydatas);
        this.adicionarEvento();
        this.display = false;
    }

    carregarEvento() {
        this.calendarioService.carregarEventos(this.turmasFiltro,this.professoresFiltro)
            .then(eventos => {
                this.events = eventos;
                console.log(this.events);
            }).catch(erro => this.errorHandler.handle(erro));
    }


    adicionarEvento() {

        this.calendarioService.adicionar(this.formulario.value)
            .then(calendario => {
                this.messageService.addSucesso('Evento adicionado com sucesso!');
            }).catch(erro => this.errorHandler.handle(erro));
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
        this.formulario.controls.selectedOpcao.setValue("GERAL");
        this.display = true;
    }

    selectTipoEvento() {
        if (this.formulario.controls.selectedOpcao.value === 'ESPECIFICA') {
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


