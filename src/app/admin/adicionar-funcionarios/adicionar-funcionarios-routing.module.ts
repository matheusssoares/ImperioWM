import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarFuncionariosPage } from './adicionar-funcionarios.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarFuncionariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarFuncionariosPageRoutingModule {}
