import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menualeatoriocollatz',
  templateUrl: './menualeatoriocollatz.component.html',
  styleUrls: ['./menualeatoriocollatz.component.css']
})
export class MenualeatoriocollatzComponent implements OnInit {

  public aleatorios: Array<number>;

  constructor() {
    this.aleatorios = [];
  }

  ngOnInit(): void {
    this.generarAleatorios();

  }



  generarAleatorios() {

    for (let i = 0; i < 4; i++) {
      console.log('hola')
      var num = Math.floor(Math.random() * 50);
      this.aleatorios.push(num);
    }
  }
}
