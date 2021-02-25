import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdicionarFornecedoresPage } from './adicionar-fornecedores.page';

describe('AdicionarFornecedoresPage', () => {
  let component: AdicionarFornecedoresPage;
  let fixture: ComponentFixture<AdicionarFornecedoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarFornecedoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdicionarFornecedoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
