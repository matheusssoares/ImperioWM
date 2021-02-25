import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControllerService } from 'src/app/services/controller.service';
import { GeralService } from 'src/app/services/geral.service';

@Component({
  selector: 'app-adicionar-funcionarios',
  templateUrl: './adicionar-funcionarios.page.html',
  styleUrls: ['./adicionar-funcionarios.page.scss'],
})

export class AdicionarFuncionariosPage implements OnInit {
  registerForm: FormGroup;
  createUser: boolean = false;
  createEnd: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private geral: GeralService,
    private controller: ControllerService,
  ) { }

  ngOnInit() {
    this.carregarForm();
  }

  async onSubmit() {
    const load = await this.geral.loadCtrl.create({
      message: 'Por favor, aguarde...'
    });

    load.present();

    try {
      const cadastrar = await this.cadastrar('funcionarios', this.registerForm.value);

      if(cadastrar) {
        (await this.geral.presentToast('Sucesso!', 'Funcionário cadastrado com sucesso!', 'bottom')).present();
        this.geral.setData('up');
        this.geral.navCtrl.back();
      }

      load.dismiss();

    } catch (err) {
      load.dismiss();
      console.log(err);

      (await this.geral.presentAlert('Opsss!', 'Pô fera, desculpa aí mas não conseguimos cadastrar.')).present()
      
    }

  }

  carregarForm() {
    this.registerForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      sexo: ['M'],
      dataNascimento: ['', Validators.required],
      whatsapp: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      rg: [''],
      cpf: [''],/* 
      senha: [''],
      
      cep: [''],
      cidade: [''],
      endereco: [''],
      complemento: [''],
      bairro: [''],
      num: [''],
      estado: [''], */
    });
  }

  cadastrar(collection, dados) {
    return new Promise((resolve, reject) => {
      this.controller.cadastrar(collection, dados).then(() => {
        resolve(true);
      }).catch((err) => {
        reject(err);
      })
    })
  }

}
