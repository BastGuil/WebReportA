import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'projets',
    loadChildren: () => import('./projets/projets.module').then( m => m.ProjetsPageModule)
  },
  {
    path: 'lots',
    loadChildren: () => import('./lots/lots.module').then( m => m.LotsPageModule)
  },
  {
    path: 'activites',
    loadChildren: () => import('./activites/activites.module').then( m => m.ActivitesPageModule)
  },
  {
    path: 'archives',
    loadChildren: () => import('./archives/archives.module').then( m => m.ArchivesPageModule)
  },
  {
    path: 'activite',
    loadChildren: () => import('./activite/activite.module').then( m => m.ActivitePageModule)
  },
  {
    path: 'heures',
    loadChildren: () => import('./heures/heures.module').then( m => m.HeuresPageModule)
  },
  {
    path: 'lot',
    loadChildren: () => import('./lot/lot.module').then( m => m.LotPageModule)
  },
  {
    path: 'projet',
    loadChildren: () => import('./projet/projet.module').then( m => m.ProjetPageModule)
  },
  {
    path: 'allouer',
    loadChildren: () => import('./allouer/allouer.module').then( m => m.AllouerPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
