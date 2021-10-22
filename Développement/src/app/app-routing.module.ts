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
    path: 'heures',
    loadChildren: () => import('./heures/heures.module').then( m => m.HeuresPageModule)
  },
  {
    path: 'allouer',
    loadChildren: () => import('./allouer/allouer.module').then( m => m.AllouerPageModule)
  },  {
    path: 'members',
    loadChildren: () => import('./members/members.module').then( m => m.MembersPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
