import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
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
  
  constructor(public afAuth: AngularFireAuth,
      public alertController: AlertController,  
      public nav: NavController) { }
  

  ngOnInit() {
  }

  pushTo(pageUrl: any, params: any) {
    this.nav.navigateForward([pageUrl], { state: params, replaceUrl: true });
    }

  async auth(){
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(this.id + "@gmail.com", this.password);
      if (res.user.uid) {
        this.pushTo('/home',res.user.uid);
      }
    } catch (error) {
      this.wrongPassOrEmail();
    }
    

  }

  async wrongPassOrEmail() {
    const alert = await this.alertController.create({
      header: 'Wrong email address or password',
      message: 'Please enter valid information',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }
}
