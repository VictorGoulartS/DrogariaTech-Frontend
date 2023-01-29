import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produto } from '../produtos/produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos: Produto[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getProdutos() {
    return this.http.get<Produto[]>('http://localhost:3001/produtos');
  }

  getProdutoId(id: String) {
    return this.http.get<Produto>('http://localhost:3001/produtos/' + id);
  }

  postProduto(produto: Produto) {
    return this.http
      .post('http://localhost:3001/produtos', produto)
      .subscribe((res) => console.log('Produto adicionado'));
  }

  deleteProduto(id: String) {
    return this.http.delete('http://localhost:3001/produtos/' + id);
  }

  updateProduto(produto: Produto) {
    return this.http.put<Produto>(
      'http://localhost:3001/produtos/' + produto._id,
      produto
    );
  }
}
