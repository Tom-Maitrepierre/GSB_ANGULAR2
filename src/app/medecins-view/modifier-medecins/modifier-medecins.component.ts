import { Component, OnInit } from '@angular/core';
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
    adresse: new FormControl(''),
    tel: new FormControl(''),
    spec: new FormControl('')
  })

  constructor(private router: ActivatedRoute, private medecins: MedecinsService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.medecins.getCurrentMedecins(this.router.snapshot.params.id).subscribe((result) => {
      console.warn("result", result);

      this.modifMedecins = new FormGroup({
        adresse: new FormControl(result['adresse']),
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
