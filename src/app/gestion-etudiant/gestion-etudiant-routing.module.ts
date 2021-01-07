import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionEtudiantPage } from './gestion-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: GestionEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionEtudiantPageRoutingModule {}
