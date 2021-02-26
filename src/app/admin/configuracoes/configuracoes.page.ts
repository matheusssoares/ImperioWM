import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CnpjPromise from 'cnpj-promise';
import { GeralService } from 'src/app/services/geral.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {
  //postit
  seg: string = 'gerais';
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private geral: GeralService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      cnpj: ['', Validators.minLength(18)],
      fantasia: ['', Validators.required],
      razao: ['', Validators.required],
      responsavel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      whatsapp: [''],
      contato_call: [''],
      desc: ['', [Validators.required]],
      cep: [''],
      cidade: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      complemento: [''],
      bairro: ['', [Validators.required]],
      num: [''],
      estado: ['', [Validators.required]],

    });
  }

  buscar_cnpj(event) {
    if (event.length > 17) {
      this.geral.loadCtrl.create({
        message: 'Buscando dados...'
      }).then((l) => {
        l.present();
        var cnpj = event.replace(/[^0-9]/g, '');

        CnpjPromise(cnpj).then(data => {
          let resp = data.qsa[0]?.nome;
          let des = data.atividade_principal[0]?.text;
          console.log(data);

          this.form.get('razao').setValue(data.nome);
          this.form.get('fantasia').setValue(data.fantasia);
          this.form.get('responsavel').setValue(resp);
          this.form.get('email').setValue(data.email);
          this.form.get('whatsapp').setValue(data.telefone);
          this.form.get('contato_call').setValue(data.telefone);
          this.form.get('desc').setValue(des);
          this.form.get('cep').setValue(data.cep);
          this.form.get('cidade').setValue(data.municipio);
          this.form.get('endereco').setValue(data.logradouro);
          this.form.get('complemento').setValue(data.complemento);
          this.form.get('bairro').setValue(data.bairro);
          this.form.get('num').setValue(data.numero);
          this.form.get('estado').setValue(data.uf);
          l.dismiss();
        }).catch((err) => {
          console.log(err);
          l.dismiss();
          this.geral.alertController.create({
            header: 'OPSSS!',
            message: 'Não encontramos o CNPJ informado na base de dados da Receita Federal',
            buttons: [
              {
                text: 'Ok'
              }
            ]
          }).then(a => a.present())
        })
      })
    }
  }

}
