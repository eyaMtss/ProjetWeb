import { Component, Input, OnInit } from '@angular/core';
import { Participant } from './Participant';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  nbParticipants: number;
  @Input() Participant: any;
  ParticipantList= [
    {
      id: 0,
      nom: 'rr',
      prenom: 'rr',
      adresse: 'rr',
      email: 'rr',
      societe: 'rr',
      poste: 'rrrrrrrrrrrrrrrrrrrrrrrr',
},
{
  id: 2,
  nom: 'bb',
  prenom: 'rr',
  adresse: 'rr',
  email: 'rr',
  societe: 'rr',
  poste: 'rr',
},
  ];
  constructorp() { }

  ngOnInit() {
  }

}
