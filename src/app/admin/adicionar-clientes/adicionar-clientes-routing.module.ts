import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarClientesPage } from './adicionar-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarClientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarClientesPageRoutingModule {}
