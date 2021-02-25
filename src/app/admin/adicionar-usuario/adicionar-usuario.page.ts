import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeralService } from 'src/app/services/geral.service';

@Component({
  selector: 'app-adicionar-usuario',
  templateUrl: './adicionar-usuario.page.html',
  styleUrls: ['./adicionar-usuario.page.scss'],
})
export class AdicionarUsuarioPage implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private geral: GeralService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.minLength(3)],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

  async onSubmit() {
    const load = await this.geral.loadCtrl.create({
      message: 'Por favor, aguarde...'
    });

    load.present();

    console.log(this.registerForm.value);
    
  }

}
