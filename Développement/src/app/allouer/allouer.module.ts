import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllouerPageRoutingModule } from './allouer-routing.module';

import { AllouerPage } from './allouer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllouerPageRoutingModule
  ],
  declarations: [AllouerPage]
})
export class AllouerPageModule {}
