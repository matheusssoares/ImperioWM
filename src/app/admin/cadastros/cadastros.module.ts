import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrosPageRoutingModule } from './cadastros-routing.module';

import { CadastrosPage } from './cadastros.page';
import { ComponentesGeraisModule } from 'src/app/componentes/componentes-gerais.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrosPageRoutingModule,
    ComponentesGeraisModule
  ],
  declarations: [CadastrosPage]
})
export class CadastrosPageModule {}
