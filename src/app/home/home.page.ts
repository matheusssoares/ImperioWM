import { Component } from '@angular/core';
import { GeralService } from '../services/geral.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private geral: GeralService
  ) {}
  onClick() {
    this.geral.route.navigateByUrl('admin/dashboard');
  }
}
