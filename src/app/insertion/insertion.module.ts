import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertionPageRoutingModule } from './insertion-routing.module';

import { InsertionPage } from './insertion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertionPageRoutingModule
  ],
  declarations: [InsertionPage]
})
export class InsertionPageModule {}
