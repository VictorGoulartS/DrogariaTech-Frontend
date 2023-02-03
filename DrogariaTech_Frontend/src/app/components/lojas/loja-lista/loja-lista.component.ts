import { Component, OnInit } from '@angular/core';
import { Loja } from './../loja.model';
import { LojaService } from './../loja.service';

@Component({
  selector: 'app-loja-lista',
  templateUrl: './loja-lista.component.html',
  styleUrls: ['./loja-lista.component.css'],
  providers: [LojaService],
})
export class LojaListaComponent {
  lojas: Loja[] = [];
  constructor(private serviceLoja: LojaService) {}

  ngOnInit(): void {
    this.getLojas();
  }

  getLojas() {
    this.serviceLoja
      .getLojas()
      .subscribe((data: Loja[]) => (this.lojas = data));
  }
}
