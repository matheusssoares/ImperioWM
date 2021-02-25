import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarFuncionariosPageRoutingModule } from './adicionar-funcionarios-routing.module';

import { AdicionarFuncionariosPage } from './adicionar-funcionarios.page';
import { ComponentesGeraisModule } from 'src/app/componentes/componentes-gerais.module';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarFuncionariosPageRoutingModule,
    ComponentesGeraisModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [AdicionarFuncionariosPage]
})
export class AdicionarFuncionariosPageModule {}
