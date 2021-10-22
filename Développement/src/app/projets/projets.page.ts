import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-projets',
  templateUrl: './projets.page.html',
  styleUrls: ['./projets.page.scss'],
})
export class ProjetsPage implements OnInit {

  projects =[
    {
      Name:"Projet 1",
      ForecastCost:"1200",
      ForcastTime:"64",
      ProjectStatus:"En Cours",
      ProjectManagerID:"Monsieur Dupont",
    },
    {
      Name:"Projet 2",
      ForecastCost:"3500",
      ForcastTime:"156",
      ProjectStatus:"En Cours",
      ProjectManagerID:"Monsieur Louis",
    },
    {
      Name:"Projet 3",
      ForecastCost:"2700",
      ForcastTime:"126",
      ProjectStatus:"Terminé",
      ProjectManagerID:"Monsieur Pierre",
    },
  ];
  
  constructor(
    public alertController: AlertController,
    public nav: NavController
  ) { }

  ngOnInit() {
  }

  async form(name:string,respo:string,description:string, debut,fin,euros:number,heures:number)
  {
    const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: "Ajouter un projet",
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
        placeholder: "Description du projet:"
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
      header: 'Cloturer le projet',
      message: 'Etes-vous sûr de vouloir cloturer ce projet',
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
