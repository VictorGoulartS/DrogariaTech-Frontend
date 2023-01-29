import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './../produto.model';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css'],
  providers: [ProdutoService],
})
export class ProdutoListaComponent {
  produtos: Produto[] = [];
  constructor(private serviceProduto: ProdutoService) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this.serviceProduto
      .getProdutos()
      .subscribe((data: Produto[]) => (this.produtos = data));
  }
}
