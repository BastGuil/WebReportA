import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  disconnect()
  {
    this.pushTo('',"");
  }

  pushTo(pageUrl: any, params: any) {
    this.nav.navigateForward([pageUrl], { state: params, replaceUrl: true });
    }

}
