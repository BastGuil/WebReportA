import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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
      public router: Router) { }
  

  ngOnInit() {
  }

  pushTo(pageUrl: any, params: any) {
    this.router.navigate([pageUrl], { state: params, replaceUrl: true });
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
      header: 'Identifiant ou mot de passe incorrect',
      message: 'Veuillez réessayer',
      buttons: [
        {
          text: 'OK',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }
}
