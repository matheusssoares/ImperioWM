import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarClientesPageRoutingModule } from './adicionar-clientes-routing.module';

import { AdicionarClientesPage } from './adicionar-clientes.page';
import { ComponentesGeraisModule } from 'src/app/componentes/componentes-gerais.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarClientesPageRoutingModule,
    ComponentesGeraisModule
  ],
  declarations: [AdicionarClientesPage]
})
export class AdicionarClientesPageModule {}
