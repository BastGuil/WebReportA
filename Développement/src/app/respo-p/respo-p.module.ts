import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespoPPageRoutingModule } from './respo-p-routing.module';

import { RespoPPage } from './respo-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespoPPageRoutingModule
  ],
  declarations: [RespoPPage]
})
export class RespoPPageModule {}
