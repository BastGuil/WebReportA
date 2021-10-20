import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeuresPage } from './heures.page';

const routes: Routes = [
  {
    path: '',
    component: HeuresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeuresPageRoutingModule {}
