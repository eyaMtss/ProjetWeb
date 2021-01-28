import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { AcceuilComponent } from 'app/acceuil/acceuil.component';
import { ParticipantsComponent } from 'app/Participants/participants/participants.component';
import { DashboardComponent } from 'app/Dashboard/dashboard/dashboard.component';
import { FormateursComponent } from 'app/Formateurs/formateurs/formateurs.component';
import { SessionsComponent } from 'app/Sessions/sessions/sessions.component';

const routes: Routes = [
  {path: '',
    component: AcceuilComponent,
    children: [
      {path: 'participant', component: ParticipantsComponent},
      {path: 'formateur', component: FormateursComponent},
      {path: 'session', component: SessionsComponent},
      {path: 'dashboard', component: DashboardComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
