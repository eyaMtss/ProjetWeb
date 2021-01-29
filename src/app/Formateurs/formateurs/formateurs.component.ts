import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
  nbFormateurs: number;
  FormateurList= [
    {
      id: 0,
      nom: 'rr',
      prenom: 'rr',
      adresse: 'rr',
      email: 'rr',
      domaineExpertise: 'rr',
},
{
  id: 2,
  nom: 'bb',
  prenom: 'rr',
  adresse: 'rr',
  email: 'rr',
  domaineExpertise: 'rr',
},
  ];
  constructor() { }

  ngOnInit() {
  }

}
