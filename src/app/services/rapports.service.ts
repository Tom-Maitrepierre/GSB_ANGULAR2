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

  getAllMedecin() {
    this.http.get<any[]>('http://localhost/maxime-chabaud/gsbapi/gsbapi/?noms=').subscribe(
      (response) => {
        this.lesRapports = response;
        this.emitMedecinSubject();
      }
    );
  }

  emitMedecinSubject() { this.rapportSubject.next(this.lesRapports.slice()); }
}