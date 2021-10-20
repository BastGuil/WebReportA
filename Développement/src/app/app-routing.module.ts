import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'superviseur',
    loadChildren: () => import('./superviseur/superviseur.module').then( m => m.SuperviseurPageModule)
  },
  {
    path: 'respo-m',
    loadChildren: () => import('./respo-m/respo-m.module').then( m => m.RespoMPageModule)
  },
  {
    path: 'respo-l',
    loadChildren: () => import('./respo-l/respo-l.module').then( m => m.RespoLPageModule)
  },
  {
    path: 'respo-p',
    loadChildren: () => import('./respo-p/respo-p.module').then( m => m.RespoPPageModule)
  },
  {
    path: 'employe',
    loadChildren: () => import('./employe/employe.module').then( m => m.EmployePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
