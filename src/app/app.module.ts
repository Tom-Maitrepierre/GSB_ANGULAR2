import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { MedecinsViewComponent } from './medecins-view/medecins-view.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { MedicamentsViewComponent } from './medicaments-view/medicaments-view.component';
import { RapportsComponent } from './rapports/rapports.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MedecinsService } from './services/medecins.service';
import { MedicamentsService } from './services/medicaments.service';
import { RapportsService } from './services/rapports.service';
import { AuthentificationService } from './services/authentification.service';
import { RapportsViewComponent } from './rapports-view/rapports-view.component';

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
    AppRoutingModule,
    HttpClientModule
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
