import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicamentsService {

  medicamentsSubject = new Subject<any[]>();
  private lesMedicaments = [];

  constructor(private http: HttpClient) { }

  getAllMedicaments() {
    this.http.get<any[]>('https://gr1.sio-carriat.com/gsbcr/?id5=d51&dateVisite=2017-04-01').subscribe(
      (response) => {
        this.lesMedicaments = response;
        this.emitMedicamentsSubject();
      }
    );
  }

  emitMedicamentsSubject() { this.medicamentsSubject.next(this.lesMedicaments.slice()); }
}

