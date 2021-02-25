import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-clientes',
  templateUrl: './adicionar-clientes.page.html',
  styleUrls: ['./adicionar-clientes.page.scss'],
})
export class AdicionarClientesPage implements OnInit {
  display_end: boolean = false;
  display: boolean = false;
  displayConta: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  foto() {

  }

  mostrar_doc(v) {
    this.display_end = v;
  }
  mostrar(v) {
    this.display = v;
  }
  mostrarConta(v) {
    this.displayConta = v;
  }

  onClick() {
    console.log('okay')
  }

}
