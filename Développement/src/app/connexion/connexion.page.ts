import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  id : string="";
  password : string="";
  
  constructor(public nav: NavController) { }
  

  ngOnInit() {
  }

  pushTo(pageUrl: any, recipientUser: string, connectedUser: string, chatter) {
    this.nav.navigateForward(pageUrl, { state: [recipientUser, connectedUser] });
  }

  auth(){
      const auth = getAuth();
    signInWithEmailAndPassword(auth, this.id + "@gmail.com", this.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}
