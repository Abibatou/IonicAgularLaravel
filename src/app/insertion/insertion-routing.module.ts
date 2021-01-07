import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertionPage } from './insertion.page';

const routes: Routes = [
  {
    path: '',
    component: InsertionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertionPageRoutingModule {}
