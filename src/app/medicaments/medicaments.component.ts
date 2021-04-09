import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { MedicamentsService } from 'GSB_ANGULAR2/src/app/services/medicaments.service';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {

  medicaments: any[];
    medicamentSubscription: Subscription;

  constructor(private Medicaments: MedicamentsService) { }

  ngOnInit(): void {
    this.Medicaments.getAllMedicaments();
    this.medicamentsSubscription = this.Medicaments.medicamentsSubject.subscribe(
      (raps: any[]) => {
        this.medicaments = medocs;
      }
    );
  }

}
