import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RapportsService {

  rapportSubject = new Subject<any[]>();
  private lesRapports = [];


  constructor(private http: HttpClient) { }

  getAllRapport() {
    this.http.get<any[]>('https://gr1.sio-carriat.com/gsbcr/?id5=d51&dateVisite=2017-04-01').subscribe(
      (response) => {
        this.lesRapports = response;
        this.emitRapportsSubject();
      }
    );
  }

  emitRapportsSubject() { this.rapportSubject.next(this.lesRapports.slice()); }
}