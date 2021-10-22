import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  members =[
    {
      Name:"Jeff Bezos",
      ForecastCost:"1200",
      ForecastTime:"64",
      ActivityStatus:"En Cours",
      ActivityManagerID:"Monsieur Dupont",
    },
    {
      Name:"John Lennon",
      ForecastCost:"3500",
      ForecastTime:"156",
      ActivityStatus:"En Cours",
      ActivityManagerID:"Monsieur Louis",
    },
    {
      Name:"Emmanuel Macron",
      ForecastCost:"2700",
      ForcastTime:"126",
      ActivityStatus:"Terminée",
      ActivityManagerID:"Monsieur Pierre",
    },
    {
      Name:"Elon Musk",
      ForecastCost:"2700",
      ForcastTime:"126",
      ActivityStatus:"Terminée",
      ActivityManagerID:"Monsieur Pierre",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
