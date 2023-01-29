import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './../produto.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css'],
  providers: [ProdutoService],
})
export class ProdutoDetalheComponent {
  constructor(
    private serviceProduto: ProdutoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.getProdutoId(params['id']));
  }

  produto: Produto | undefined;

  getProdutoId(id: String) {
    this.serviceProduto
      .getProdutoId(id)
      .subscribe((data: Produto) => (this.produto = data));
  }
}
