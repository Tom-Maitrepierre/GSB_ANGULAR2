import { Component,Input, OnInit } from '@angular/core';
import { MedicamentsService } from '../services/medicaments.service';

@Component({
  selector: 'app-medicaments-view',
  templateUrl: './medicaments-view.component.html',
  styleUrls: ['./medicaments-view.component.css']
})
export class MedicamentsViewComponent implements OnInit {
@Input() ref: string;
@Input() name: string;
@Input() idFam: string;
@Input() compo: string;
@Input() effect: string;
@Input() contraindication: string;

leMedicament: any[];

  constructor(private medicamentsService: MedicamentsService) { }

  ngOnInit(): void {
  }

}
