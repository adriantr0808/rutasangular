import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {
  public numero!: number;
  public collatz: Array<number>
  constructor(private _activeRoute: ActivatedRoute) {
    this.collatz = [];
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      //PREGUNTAMOS SI EXISTE EL PARAMETRO numero
      if (params['numero'] != null) {
        //ASIGNAMOS LA PROPIEDAD PARA LA PAGINA
        //SIEMPRE VIENE COMO STRING
        this.numero = parseInt(params['numero']);

      }
    });
    this.conjeturaCollatz();
  }

  conjeturaCollatz() {
    var num = this.numero;
    while (num != 1) {
      if (num % 2 == 0) {
        num = num / 2;
        this.collatz.push(num);
      } else {
        num = num * 3 + 1;
        this.collatz.push(num);
      }
    }
    console.log(this.collatz);
  }

}
