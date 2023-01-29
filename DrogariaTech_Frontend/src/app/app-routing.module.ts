import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProdutoListaComponent } from './components/produtos/produto-lista/produto-lista.component';
import { ProdutoDetalheComponent } from './components/produtos/produto-detalhe/produto-detalhe.component';
import { LojaListaComponent } from './components/lojas/loja-lista/loja-lista.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'produtos',
    component: ProdutoListaComponent,
  },
  {
    path: 'produtos/:id',
    component: ProdutoDetalheComponent,
  },
  {
    path: 'lojas',
    component: LojaListaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
