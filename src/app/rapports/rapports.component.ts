import { Component,Input, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {RapportsService} from '../services/rapports.service';

@Component({
  selector: 'app-rapports',
  templateUrl: './rapports.component.html',
  styleUrls: ['./rapports.component.css']
})
export class RapportsComponent implements OnInit {

    rapports: any[];
    rapportSubscription: Subscription;
  
    constructor(private RapportsService: RapportsService) { }
  
    ngOnInit(): void {
      this.RapportsService.getAllRapport();
      this. rapportSubscription = this.RapportsService.rapportSubject.subscribe(
        (raps: any[]) => {
          this.rapports = raps;
        }
      );
    }//t
  }

