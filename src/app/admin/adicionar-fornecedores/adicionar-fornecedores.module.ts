import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarFornecedoresPageRoutingModule } from './adicionar-fornecedores-routing.module';

import { AdicionarFornecedoresPage } from './adicionar-fornecedores.page';
import { ComponentesGeraisModule } from 'src/app/componentes/componentes-gerais.module';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarFornecedoresPageRoutingModule,
    ComponentesGeraisModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [AdicionarFornecedoresPage]
})
export class AdicionarFornecedoresPageModule {}
