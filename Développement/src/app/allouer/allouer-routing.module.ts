import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllouerPage } from './allouer.page';

const routes: Routes = [
  {
    path: '',
    component: AllouerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllouerPageRoutingModule {}
