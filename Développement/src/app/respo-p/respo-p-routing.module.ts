import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespoPPage } from './respo-p.page';

const routes: Routes = [
  {
    path: '',
    component: RespoPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespoPPageRoutingModule {}
