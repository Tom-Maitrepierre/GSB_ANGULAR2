import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { MedecinsViewComponent } from './medecins-view/medecins-view.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { MedicamentsViewComponent } from './medicaments-view/medicaments-view.component';
import { RapportsComponent } from './rapports/rapports.component';
import { HttpClientModule } from '@angular/common/http';
import { MedecinsService } from './services/medecins.service';
import { MedicamentsService } from './services/medicaments.service';
import { RapportsService } from './services/rapports.service';
import { AuthentificationService } from './services/authentification.service';
import { RapportsViewComponent } from './rapports-view/rapports-view.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {NgxPaginationModule} from 'ngx-pagination';


const appRoutes: Routes = [

  { path: 'medecins', component: MedecinsComponent},
  { path: 'medicaments', component: MedicamentsComponent},
  { path: 'rapports', component: RapportsComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    MedecinsComponent,
    MedecinsViewComponent,
    MedicamentsComponent,
    MedicamentsViewComponent,
    RapportsComponent,
    RapportsViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatButtonModule,
    NgxPaginationModule
  ],
  providers: [
    MedecinsService,
    MedicamentsService,
    RapportsService,
    AuthentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
