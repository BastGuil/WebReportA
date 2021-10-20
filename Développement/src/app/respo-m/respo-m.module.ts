import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespoMPageRoutingModule } from './respo-m-routing.module';

import { RespoMPage } from './respo-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespoMPageRoutingModule
  ],
  declarations: [RespoMPage]
})
export class RespoMPageModule {}
