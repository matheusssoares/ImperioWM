import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionarioPageRoutingModule } from './funcionario-routing.module';

import { FuncionarioPage } from './funcionario.page';
import { ComponentesGeraisModule } from 'src/app/componentes/componentes-gerais.module';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncionarioPageRoutingModule,
    ComponentesGeraisModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [FuncionarioPage]
})
export class FuncionarioPageModule {}
