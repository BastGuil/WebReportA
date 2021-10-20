import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespoMPage } from './respo-m.page';

const routes: Routes = [
  {
    path: '',
    component: RespoMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespoMPageRoutingModule {}
