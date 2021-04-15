import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MedicamentsService } from '../services/medicaments.service';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {

  medicaments: any[];
  medicamentsSubscription: Subscription;

  constructor(private Medicaments: MedicamentsService) { }

  ngOnInit(): void {
    this.Medicaments.getAllMedicaments();
    this.medicamentsSubscription = this.Medicaments.medicamentsSubject.subscribe(
      (medocs: any[]) => {
        this.medicaments = medocs;
      }
    );
  }

}
