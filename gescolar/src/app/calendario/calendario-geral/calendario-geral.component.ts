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
    alunos: SelectItem[];
    alunosSelecionados: SelectItem[];
    professores: SelectItem[];
    professoresSelecionados: SelectItem[];
    notificacoes: any[];
    cols: any[];

    constructor() { }

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


        this.alunos = [
            {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
            {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
            {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
            {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
            {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
        ];

        this.professores = [
            {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
            {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
            {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
            {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
            {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
        ];


    }

    showModalDialog() {
        this.display = true;
    }

}
