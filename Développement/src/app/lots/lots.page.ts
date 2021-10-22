import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-lots',
  templateUrl: './lots.page.html',
  styleUrls: ['./lots.page.scss'],
})
export class LotsPage implements OnInit {

  lots =[
    {
      Name:"Lot 1",
      ForecastCost:"1200",
      ForcastTime:"64",
      BatchStatus:"En Cours",
      BatchManagerID:"Monsieur Dupont",
    },
    {
      Name:"Lot 2",
      ForecastCost:"3500",
      ForcastTime:"156",
      BatchStatus:"En Cours",
      BatchManagerID:"Monsieur Louis",
    },
    {
      Name:"Lot 3",
      ForecastCost:"2700",
      ForcastTime:"126",
      BatchStatus:"Terminé",
      BatchManagerID:"Monsieur Pierre",
    },
  ];

  constructor(public alertController: AlertController,
    public nav: NavController) { }

  ngOnInit() {
  }

  async form(name:string,respo:string,description:string, debut,fin,euros:number,heures:number)
  {
    const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: "Ajouter un lot",
    inputs: [
      {
        name: 'name',
        type: 'text',
        id: 'name-id',
        value: name,
        placeholder: "Nom:"
      },
      {
        name: 'respo',
        type: 'text',
        id: 'respo-id',
        value: respo,
        placeholder: "Respo:"
      },
      {
        name: 'description',
        type: 'text',
        id: 'description-id',
        value: description,
        placeholder: "Description du lot:"
      },
      {
        name: 'debut',
        type: 'date',
        id: 'debut-id',
        value: debut,
        placeholder: "Date de début:"
      },
      {
        name: 'fin',
        type: 'date',
        id: 'fin-id',
        value: fin,
        placeholder: "Date de fin:"
      },
      {
        name: 'euros',
        type: 'number',
        id: 'euros-id',
        value: euros,
        placeholder: "Budget (euros):"
      },
      {
        name: 'heures',
        type: 'number',
        id: 'heures-id',
        value: heures,
        placeholder: "Budget (heures):"
      }
    ],
    buttons: [
      {
        text: "Annuler",
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
        }
      }, {
        text: "Valider",
        handler: async (alertData) => {
          if(alertData.name==""||alertData.respo==""||alertData.description==""||alertData.debut==""||
          alertData.fin==""||alertData.euros==""||alertData.heures=="")
          {
            const alert = await this.alertController.create({
              header: 'Informations manquantes',
              message: 'Veuillez compléter tous les champs avant de valider',
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    this.form(alertData.name,alertData.respo,alertData.description,alertData.debut,alertData.fin,
                      alertData.euros,alertData.heures)
                  }
                }
              ]
            });
            await alert.present();
          }
          else
          {
            //Fonction envoi firebase
          }
        }
      }]
    });
  
      await alert.present();
  }

  async cloturer()
  {
    const alert = await this.alertController.create({
      header: 'Cloturer le lot',
      message: 'Etes-vous sûr de vouloir cloturer ce lot',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            
          }
        },
        {
          text: 'Oui',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }

  pushTo(pageUrl: any, params: any) {
    this.nav.navigateForward([pageUrl], { state: params, replaceUrl: true });
    }
}
