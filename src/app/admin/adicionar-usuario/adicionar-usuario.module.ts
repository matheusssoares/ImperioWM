import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarUsuarioPageRoutingModule } from './adicionar-usuario-routing.module';

import { AdicionarUsuarioPage } from './adicionar-usuario.page';
import { ComponentesGeraisModule } from 'src/app/componentes/componentes-gerais.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarUsuarioPageRoutingModule,
    ComponentesGeraisModule,
    ReactiveFormsModule,
  ],
  declarations: [AdicionarUsuarioPage]
})
export class AdicionarUsuarioPageModule {}
