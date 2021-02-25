import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionarioPageRoutingModule } from './funcionario-routing.module';

import { FuncionarioPage } from './funcionario.page';
import { ComponentesGeraisModule } from 'src/app/componentes/componentes-gerais.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncionarioPageRoutingModule,
    ComponentesGeraisModule
  ],
  declarations: [FuncionarioPage]
})
export class FuncionarioPageModule {}
