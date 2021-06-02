import { Component, OnInit, Input } from '@angular/core';
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
  p: number = 1;
  @Input() name: string;

  constructor(private Medicaments: MedicamentsService) { }

  ngOnInit(): void {
    this.Medicaments.getAllMedicaments();
    this.medicamentsSubscription = this.Medicaments.medicamentSubject.subscribe(
      (medocs: any[]) => {
        this.medicaments = medocs;
      }
    );
  }

}
