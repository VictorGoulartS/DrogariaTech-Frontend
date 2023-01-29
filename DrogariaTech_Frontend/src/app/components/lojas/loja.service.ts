import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Loja } from '../lojas/loja.model';

@Injectable({
  providedIn: 'root',
})
export class LojaService {
  private lojas: Loja[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getLojas() {
    return this.http.get<Loja[]>('http://localhost:4000/lojas');
  }

  getLojaId(id: String) {
    return this.http.get<Loja>('http://localhost:4000/lojas/' + id);
  }

  postLoja(loja: Loja) {
    return this.http
      .post('http://localhost:4000/lojas', loja)
      .subscribe((res) => console.log('Loja adicionada'));
  }

  deleteLoja(id: String) {
    return this.http.delete('http://localhost:4000/lojas/' + id);
  }

  updateLoja(loja: Loja) {
    return this.http.put<Loja>('http://localhost:4000/lojas/' + loja._id, loja);
  }
}
