import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormateursComponent } from './Formateurs/formateurs/formateurs.component';
import { SessionsComponent } from './Sessions/sessions/sessions.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { AjoutParticipantComponent } from './Participants/participant/ajout-participant/ajout-participant.component';
import { ParticipantComponent } from './Participants/participant/participant.component';
import { AjoutFormateurComponent } from './Formateurs/formateurs/ajout-Formateur/ajout-formateur/ajout-formateur.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    FormateursComponent,
    SessionsComponent,
    DashboardComponent,
    AjoutParticipantComponent,
    ParticipantComponent,
    AjoutFormateurComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
