import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespoLPage } from './respo-l.page';

const routes: Routes = [
  {
    path: '',
    component: RespoLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespoLPageRoutingModule {}
