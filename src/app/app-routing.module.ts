import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin/dashboard',
    loadChildren: () => import('./admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'admin/cadastros',
    loadChildren: () => import('./admin/cadastros/cadastros.module').then( m => m.CadastrosPageModule)
  },
  {
    path: 'admin/adicionar-clientes',
    loadChildren: () => import('./admin/adicionar-clientes/adicionar-clientes.module').then( m => m.AdicionarClientesPageModule)
  },
  {
    path: 'admin/clientes',
    loadChildren: () => import('./admin/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'admin/fornecedores',
    loadChildren: () => import('./admin/fornecedores/fornecedores.module').then( m => m.FornecedoresPageModule)
  },
  {
    path: 'admin/adicionar-fornecedores',
    loadChildren: () => import('./admin/adicionar-fornecedores/adicionar-fornecedores.module').then( m => m.AdicionarFornecedoresPageModule)
  },
  {
    path: 'admin/configuracoes',
    loadChildren: () => import('./admin/configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'admin/usuarios',
    loadChildren: () => import('./admin/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'admin/adicionar-usuarios',
    loadChildren: () => import('./admin/adicionar-usuario/adicionar-usuario.module').then( m => m.AdicionarUsuarioPageModule)
  },
  {
    path: 'admin/funcionarios',
    loadChildren: () => import('./admin/funcionarios/funcionarios.module').then( m => m.FuncionariosPageModule)
  },
  {
    path: 'admin/adicionar-funcionarios',
    loadChildren: () => import('./admin/adicionar-funcionarios/adicionar-funcionarios.module').then( m => m.AdicionarFuncionariosPageModule)
  },
  {
    path: 'admin/editar/funcionario/:key',
    loadChildren: () => import('./admin/editar/funcionario/funcionario.module').then( m => m.FuncionarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
