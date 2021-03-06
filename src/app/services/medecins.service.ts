import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedecinsService {

  medecinSubject = new Subject<any[]>();
  private lesMedecins = [];
  URL = 'https://gr1.sio-carriat.com/gsbcr/?id=';
  

  constructor(private http: HttpClient) { }

  getAllMedecin() {
    this.http.get<any[]>('https://gr1.sio-carriat.com/gsbcr/?noms').subscribe(
      (response) => {
        this.lesMedecins = response;
        this.emitMedecinSubject();
      }
    );
  }

  search(name: string) {
    this.http.get<any[]>('https://gr1.sio-carriat.com/gsbcr/?noms=' + name).subscribe(
      (response) => {
        this.lesMedecins = response;
        this.emitMedecinSubject();
      }
    );
  }

  getCurrentMedecins(id){
    return this.http.get(`${this.URL}${id}`)
  }

  modifierMedecins(id,data){
    return this.http.put(`${this.URL}${id}`,data)
  }

  emitMedecinSubject() {
    this.medecinSubject.next(this.lesMedecins.slice());
  }
}

//this.http.get<any[]>('http://localhost/maxime-chabaud/gsbapi/gsbapi/?noms=') changer le lien url entre parenthèse 
//https://gr1.sio-carriat.com/gsbcr/?noms=