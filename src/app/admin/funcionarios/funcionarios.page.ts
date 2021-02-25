import { Component, OnInit } from '@angular/core';
import { ControllerService } from 'src/app/services/controller.service';
import { GeralService } from 'src/app/services/geral.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.page.html',
  styleUrls: ['./funcionarios.page.scss'],
})
export class FuncionariosPage implements OnInit {
  data: any = [];
  display: boolean = false;
  constructor(
    private geral: GeralService,
    private controller: ControllerService
  ) { }

  ngOnInit() {
    this.geral.getDataSub().subscribe((data) => {
      if (data == 'up') {
        console.log('entramos aqui...');

        setTimeout(() => {
          this.iniciar();
        }, 100)
      }

    })

    this.iniciar();
  }

  add() {
    this.geral.route.navigateByUrl('admin/adicionar-funcionarios')
  }

  async iniciar() {

    const load = await this.geral.loadCtrl.create({
      message: 'Carregando, aguarde...'
    });

    load.present();


    const data = await this.getData();

    if (!data) {
      this.display = true;
      console.log(this.display);
      this.data = data;
    }

    this.data = data;



    load.dismiss();

  }

  getData() {
    return new Promise((resolve, reject) => {
      this.controller.getdata('funcionarios').subscribe((data) => {
        if (data.length == 0) {
          resolve(false)
        }
        resolve(data)
      })
    })
  }

  async action(dados) {
    const actionSheet = await this.geral.actionCtrl.create({
      header: 'Opções',
      buttons: [
        {
          text: 'Visualizar Detalhes',
          icon: 'search',
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Editar Informações',
          icon: 'create',
          handler: () => {
            this.geral.route.navigateByUrl(`admin/editar/funcionario/${dados.key}`)

          }
        },

        {
          text: 'Excluir Funcionário',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

}
