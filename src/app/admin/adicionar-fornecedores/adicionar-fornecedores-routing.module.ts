import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarFornecedoresPage } from './adicionar-fornecedores.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarFornecedoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarFornecedoresPageRoutingModule {}
