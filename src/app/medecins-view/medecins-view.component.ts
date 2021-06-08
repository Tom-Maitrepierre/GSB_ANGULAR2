import { Component, Input, OnInit } from '@angular/core';
import { MedecinsService } from '../services/medecins.service';

@Component({
  selector: 'app-medecins-view',
  templateUrl: './medecins-view.component.html',
  styleUrls: ['./medecins-view.component.css']
})
export class MedecinsViewComponent implements OnInit {
  @Input() id: number;
  @Input() firstname: string;
  @Input() name: string;
  @Input() address: string;
  @Input() tel: string;
  @Input() spec: string;
  @Input() dep: string;

  leMedecin: any[];


  constructor(private medecinsService: MedecinsService) { }

  ngOnInit(): void {
  }
}