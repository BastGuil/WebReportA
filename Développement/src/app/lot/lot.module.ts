import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LotPageRoutingModule } from './lot-routing.module';

import { LotPage } from './lot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LotPageRoutingModule
  ],
  declarations: [LotPage]
})
export class LotPageModule {}
