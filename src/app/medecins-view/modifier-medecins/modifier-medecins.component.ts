import { Component, OnInit, Input } from '@angular/core';
import { MedecinsService } from '../../services/medecins.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-medecins',
  templateUrl: './modifier-medecins.component.html',
  styleUrls: ['./modifier-medecins.component.css']
})
export class ModifierMedecinsComponent implements OnInit {
  modifMedecins = new FormGroup({
    address: new FormControl(''),
    tel: new FormControl(''),
    spec: new FormControl('')
  })
  
  @Input() id: number;
  @Input() firstname: string;
  @Input() name: string;
  @Input() address: string;
  @Input() tel: string;
  @Input() spec: string;
  @Input() dep: string;
  
  constructor(private router: ActivatedRoute, private medecins: MedecinsService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.medecins.getCurrentMedecins(this.router.snapshot.params.id).subscribe((result) => {
      console.warn("result", result);

      this.modifMedecins = new FormGroup({
        address: new FormControl(result['address']),
        tel: new FormControl(result['tel']),
        spec: new FormControl(result['spec'])
      })
    })
  }

  onSubmit(){
    console.warn(this.modifMedecins.value);
  }

  modifierMedecins() {
    this.medecins.modifierMedecins(this.router.snapshot.params.id, this.modifMedecins.value).subscribe((result) => {

    })
  }
}