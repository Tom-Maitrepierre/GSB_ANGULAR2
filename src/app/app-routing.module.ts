import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {MedecinsComponent} from './medecins/medecins.component';
import {MedicamentsComponent} from './medicaments/medicaments.component';
import {RapportsComponent} from './rapports/rapports.component';

const routes: Routes = [
  {path:'medecins',component:MedecinsComponent},
  {path:'medicaments',component:MedicamentsComponent},
  {path:'rapports',component:RapportsComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
