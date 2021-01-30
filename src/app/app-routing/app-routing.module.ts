import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { ParticipantComponent } from 'app/Participants/participant/participant.component';
import { AcceuilComponent } from 'app/acceuil/acceuil.component';
import { FormateursComponent } from 'app/Formateurs/formateurs/formateurs.component';
import { SessionsComponent } from 'app/Sessions/sessions/sessions.component';
import { DashboardComponent } from 'app/Dashboard/dashboard/dashboard.component';
import { AjoutParticipantComponent } from 'app/Participants/participant/ajout-participant/ajout-participant.component';
import { AjoutFormateurComponent } from 'app/Formateurs/formateurs/ajout-Formateur/ajout-formateur/ajout-formateur.component';

const routes: Routes = [
  {path: '',
    component: AcceuilComponent,
    children: [
      {path: 'participant', component: ParticipantComponent,
      /*children: [
        {
          path: 'participant/ajout', component: AjoutParticipantComponent
        }, ],*/
      },
      {path: 'formateur', component: FormateursComponent},
      {path: 'session', component: SessionsComponent},
      {path: 'dashboard', component: DashboardComponent},
      {
        path: 'participant/ajout', component: AjoutParticipantComponent
      },
      {
        path: 'formateur/ajout', component: AjoutFormateurComponent
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
