import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicamentsService {

  medicamentSubject = new Subject<any[]>();
  private lesMedicaments = [];

  constructor(private http: HttpClient) { }

  getAllMedicaments() {
    this.http.get<any[]>('https://gr1.sio-carriat.com/gsbcr/?nomMed=').subscribe(
      (response) => {
        this.lesMedicaments = response;
        this.emitMedicamentsSubject();
      }
    );
  }

  emitMedicamentsSubject() { this.medicamentSubject.next(this.lesMedicaments.slice()); }
}

