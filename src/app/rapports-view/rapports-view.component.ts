import { Component, OnInit, Input } from '@angular/core';
import { RapportsService } from '../services/rapports.service';

@Component({
  selector: 'app-rapports-view',
  templateUrl: './rapports-view.component.html',
  styleUrls: ['./rapports-view.component.css']
})
export class RapportsViewComponent implements OnInit {
  @Input() id: number;
  @Input() nom: string;
  @Input() prenom: string; 
  @Input() date: string;
  @Input() motif: string;
  @Input() bilan: string;
  @Input() idMedecin: number;



  constructor(private rapportsService: RapportsService) { }

  ngOnInit(): void {
  }

}
