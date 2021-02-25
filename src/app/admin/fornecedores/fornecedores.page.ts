import { Component, OnInit } from '@angular/core';
import { GeralService } from 'src/app/services/geral.service';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.page.html',
  styleUrls: ['./fornecedores.page.scss'],
})
export class FornecedoresPage implements OnInit {

  constructor(
    private geral: GeralService
  ) { }

  ngOnInit() {
  }

  onClick() {

  }

  add() {
    this.geral.route.navigateByUrl(`admin/adicionar-fornecedores`);
  }

}
