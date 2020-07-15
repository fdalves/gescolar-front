import { GescolarHttp } from '../seguranca/gescolar-http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


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

}
