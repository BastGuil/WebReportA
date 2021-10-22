import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  disconnect()
  {
    this.pushTo('',"");
  }

  pushTo(pageUrl: any, params: any) {
    this.router.navigate([pageUrl], { state: params, replaceUrl: false });
    }

}
