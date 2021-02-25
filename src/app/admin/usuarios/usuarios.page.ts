import { Component, OnInit } from '@angular/core';
import { GeralService } from 'src/app/services/geral.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(
    private geral: GeralService
  ) { }

  ngOnInit() {
  }

  add() {
    this.geral.route.navigateByUrl(`admin/adicionar-usuarios`);
  }

}
