import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  pushTo(pageUrl: any, recipientUser: string, connectedUser: string, chatter) {
    this.nav.navigateForward(pageUrl, { state: [recipientUser, connectedUser] });
};

}
