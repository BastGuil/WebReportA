import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespoLPageRoutingModule } from './respo-l-routing.module';

import { RespoLPage } from './respo-l.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespoLPageRoutingModule
  ],
  declarations: [RespoLPage]
})
export class RespoLPageModule {}
