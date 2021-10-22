import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allouer',
  templateUrl: './allouer.page.html',
  styleUrls: ['./allouer.page.scss'],
})
export class AllouerPage implements OnInit {

  activites =[
    {
      Name:"Activite 1",
      ForecastCost:"1200",
      ForcastTime:"64",
      ActivityStatus:"En Cours",
      ActivityManagerID:"Monsieur Dupont",
    },
    {
      Name:"Activite 2",
      ForecastCost:"3500",
      ForcastTime:"156",
      ActivityStatus:"En Cours",
      ActivityManagerID:"Monsieur Louis",
    },
    {
      Name:"Activite 3",
      ForecastCost:"2700",
      ForcastTime:"126",
      ActivityStatus:"Terminée",
      ActivityManagerID:"Monsieur Pierre",
    },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
