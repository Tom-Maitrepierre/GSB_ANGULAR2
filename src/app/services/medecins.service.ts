import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedecinsService {

  medecinSubject = new Subject<any[]>();
  private lesMedecins = [];

  constructor(private http: HttpClient) { }

  getAllMedecin() {
    this.http.get<any[]>('http://localhost/gsbapi/?noms=').subscribe(
      (response) => {
        this.lesMedecins = response;
        this.emitMedecinSubject();
      }
    );
  }

  emitMedecinSubject() { this.medecinSubject.next(this.lesMedecins.slice()); }
}
