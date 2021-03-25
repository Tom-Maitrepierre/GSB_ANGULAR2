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
    this.http.get<any[]>('http://localhost/maxime-chabaud/gsbapi/gsbapi/?noms=').subscribe(
      (response) => {
        this.lesRapports = response;
        this.emitRapportsSubject();
      }
    );
  }

  emitRapportsSubject() { this.rapportSubject.next(this.lesRapports.slice()); }
}