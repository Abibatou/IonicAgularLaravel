import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionEtudiantPageRoutingModule } from './gestion-etudiant-routing.module';

import { GestionEtudiantPage } from './gestion-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionEtudiantPageRoutingModule
  ],
  declarations: [GestionEtudiantPage]
})
export class GestionEtudiantPageModule {}
