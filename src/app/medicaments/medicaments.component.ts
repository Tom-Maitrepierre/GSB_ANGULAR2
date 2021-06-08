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

  constructor(private medicamentsService: MedicamentsService) { }

  ngOnInit(): void {
    this.medicamentsService.getAllMedicaments();
    this.medicamentsSubscription = this.medicamentsService.medicamentSubject.subscribe(
      (medocs: any[]) => {
        this.medicaments = medocs;
      }
    );
  }

}
