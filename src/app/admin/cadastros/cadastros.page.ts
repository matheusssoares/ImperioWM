import { Component, OnInit } from '@angular/core';
import { GeralService } from 'src/app/services/geral.service';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.page.html',
  styleUrls: ['./cadastros.page.scss'],
})
export class CadastrosPage implements OnInit {

  constructor(
    private geral: GeralService
  ) { }

  ngOnInit() {
  }

  open(page: string){
    this.geral.route.navigateByUrl(`admin/${page}`);
  }

}
