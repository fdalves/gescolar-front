import { GescolarHttp } from '../seguranca/gescolar-http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export class CalendarioFiltro {
    turmas: any[];
    professores: any[];
    public constructor(turmas: any[], professores: any[]) {
        this.turmas = turmas;
        this.professores = professores;
    }
}

@Injectable()
export class CalendarioService {

    calendarioUrl: string;



    constructor(private http: GescolarHttp) {
        this.calendarioUrl = `${environment.apiUrl}/calendario`;
    }

    adicionar(evento: any): Promise<any> {
        return this.http.post<any>(this.calendarioUrl, evento)
            .toPromise()
            .then(response => response);
    }

    carregarEventos(prof: any[], turmas: any[]): Promise<any> {
        const cal = new CalendarioFiltro(prof, turmas);
        return this.http.post<any>(`${this.calendarioUrl}/carregarEventos`, cal)
            .toPromise()
            .then(response => response);
    }

}
