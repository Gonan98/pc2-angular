import { Component, OnInit } from '@angular/core';
import { GastoService } from 'src/app/gasto.service';
import { Gasto } from 'src/app/models/Gasto';

@Component({
  selector: 'app-lista-gasto',
  templateUrl: './lista-gasto.component.html',
  styleUrls: ['./lista-gasto.component.css']
})
export class ListaGastoComponent implements OnInit {

  total: number = 0;
  gastos?: Gasto[];

  constructor(private gastoService: GastoService) { }

  ngOnInit(): void {
    this.gastoService.getGastos()
      .subscribe(data => {
        this.gastos = data;
        this.gastos.map(g => this.total += g.amount);
        console.log(this.gastos);
      }, error => console.log);
  }

}
