import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.page.html',
  styleUrls: ['./activites.page.scss'],
})
export class ActivitesPage implements OnInit {

  activites =[
    {
      Name:"Activite 1",
      ForecastCost:"1200",
      ForecastTime:"64",
      ActivityStatus:"En Cours",
      ActivityManagerID:"Monsieur Dupont",
    },
    {
      Name:"Activite 2",
      ForecastCost:"3500",
      ForecastTime:"156",
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

  modify = [];

  constructor(public alertController: AlertController,
    public nav: NavController) { }

  ngOnInit() {
      for(var i=0; i<this.activites.length;i++)
      {
        this.modify[i]=false;
      }
  }

  async form(name:string,respo:string,description:string, debut,fin,euros:number,heures:number)
  {
    const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: "Ajouter une activité",
    inputs: [
      {
        name: 'name',
        type: 'text',
        id: 'name-id',
        value: name,
        placeholder: "AA"
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
        placeholder: "Description de l'activité:"
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
      header: "Cloturer l'activité",
      message: 'Etes-vous sûr de vouloir cloturer cette activité',
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
