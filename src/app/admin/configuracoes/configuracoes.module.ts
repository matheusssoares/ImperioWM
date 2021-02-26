import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracoesPageRoutingModule } from './configuracoes-routing.module';

import { ConfiguracoesPage } from './configuracoes.page';
import { ComponentesGeraisModule } from 'src/app/componentes/componentes-gerais.module';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracoesPageRoutingModule,
    ComponentesGeraisModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [ConfiguracoesPage]
})
export class ConfiguracoesPageModule {}
