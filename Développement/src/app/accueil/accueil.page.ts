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

  disconect()
  {

  }

  pushTo(pageUrl: any, recipientUser: string, connectedUser: string, chatter) {
    this.nav.navigateForward(pageUrl, { state: [recipientUser, connectedUser] });
};

}
