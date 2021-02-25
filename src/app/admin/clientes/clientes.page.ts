import { Component, OnInit } from '@angular/core';
import { GeralService } from 'src/app/services/geral.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  constructor(
    private geral: GeralService
  ) { }

  ngOnInit() {
  }
  onClick() {

  }

  add() {
    this.geral.route.navigateByUrl(`admin/adicionar-clientes`);
  }

}
