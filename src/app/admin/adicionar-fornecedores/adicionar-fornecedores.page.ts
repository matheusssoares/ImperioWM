import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CnpjPromise from 'cnpj-promise';
import { GeralService } from 'src/app/services/geral.service';

@Component({
  selector: 'app-adicionar-fornecedores',
  templateUrl: './adicionar-fornecedores.page.html',
  styleUrls: ['./adicionar-fornecedores.page.scss'],
})
export class AdicionarFornecedoresPage implements OnInit {
  seg: string = 'gerais';
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private geral: GeralService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
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

  segmentChanged(e) {

  }
  logo() {

  }

  onSubmit() {

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

          this.registerForm.get('razao').setValue(data.nome);
          this.registerForm.get('fantasia').setValue(data.fantasia);
          this.registerForm.get('responsavel').setValue(resp);
          this.registerForm.get('email').setValue(data.email);
          this.registerForm.get('whatsapp').setValue(data.telefone);
          this.registerForm.get('contato_call').setValue(data.telefone);
          this.registerForm.get('desc').setValue(des);
          this.registerForm.get('cep').setValue(data.cep);
          this.registerForm.get('cidade').setValue(data.municipio);
          this.registerForm.get('endereco').setValue(data.logradouro);
          this.registerForm.get('complemento').setValue(data.complemento);
          this.registerForm.get('bairro').setValue(data.bairro);
          this.registerForm.get('num').setValue(data.numero);
          this.registerForm.get('estado').setValue(data.uf);
          l.dismiss();
        }).catch((err) => {
          console.log(err);
          l.dismiss();
          this.geral.alertController.create({
            header: 'Atenção!',
            message: 'Não encontramos o cnpj informado na base de dados da Receita Federal',
            buttons: [
              {
                text: 'Entendi'
              }
            ]
          }).then(a => a.present())
        })
      })
    }
  }
}
