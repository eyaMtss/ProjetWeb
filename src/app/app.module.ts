import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ParticipantsComponent } from './Participants/participants/participants.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormateursComponent } from './Formateurs/formateurs/formateurs.component';
import { SessionsComponent } from './Sessions/sessions/sessions.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantsComponent,
    AcceuilComponent,
    FormateursComponent,
    SessionsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
