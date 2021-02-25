import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControllerService } from 'src/app/services/controller.service';
import { GeralService } from 'src/app/services/geral.service';
@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.page.html',
  styleUrls: ['./funcionario.page.scss'],
})
export class FuncionarioPage implements OnInit {
  dados: any = {};
  constructor(
    private controller: ControllerService,
    private geral: GeralService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.iniciar();
  }

  async iniciar() {
    const load = await this.geral.loadCtrl.create({
      message: 'Carregando, aguarde...'
    });

    load.present();
    const data = await this.getDataById();
    this.dados = data;
    console.log(data);
    
    try {
      load.dismiss();
    } catch (err) {
      console.log(err);    
      load.dismiss();
    }
  }

  getDataById() {
    return new Promise((resolve, reject) => {
      this.controller.getdataById('funcionarios', this.router.snapshot.paramMap.get('key'))
        .subscribe((data: any) => {
          resolve(data);
        })
    })
  }

}
