
import { Component } from '@angular/core';

@Component({
  selector: 'app-simula-tu-credito',
  templateUrl: './simula-tu-credito.component.html',
  styleUrls: ['./simula-tu-credito.component.css']
})
export class SimulaTuCreditoComponent {

  MontoTotal: number = 19500
  Plazo: number = 16

  CuotaMes: number

  constructor() { }


  obteneCredito(){
    this.CuotaMes=this.MontoTotal/this.Plazo
  }

}
