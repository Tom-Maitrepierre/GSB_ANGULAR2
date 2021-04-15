import { Component, OnInit, } from '@angular/core';
import { Subscription } from 'rxjs';
import { MedecinsService } from '../services/medecins.service';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.css']
})
export class MedecinsComponent implements OnInit {


  medecins: any[];
  medecinSubscription: Subscription;
  p: number = 1;

  constructor(private medecinsService: MedecinsService) { }

  ngOnInit(): void {
    this.medecinsService.getAllMedecin();
    this.medecinSubscription = this.medecinsService.medecinSubject.subscribe(
      (meds: any[]) => {
        this.medecins = meds;
      }
    );
  }
}
