import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeuresPageRoutingModule } from './heures-routing.module';

import { HeuresPage } from './heures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeuresPageRoutingModule
  ],
  declarations: [HeuresPage]
})
export class HeuresPageModule {}
