import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { get } from 'http';
import { Participant } from '../Participant';

@Component({
  selector: 'app-ajout-participant',
  templateUrl: './ajout-participant.component.html',
  styleUrls: ['./ajout-participant.component.css']
})
export class AjoutParticipantComponent implements OnInit {

  participant: Participant ;

    constructor() {}

    ngOnInit() {
      }
      ajouterParticipant(Participant: any) {
        console.log('Your form data : ', Participant );
    }
}

