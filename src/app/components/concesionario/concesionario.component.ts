import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/models/coche';
@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ConcesionarioComponent implements OnInit {
  public coches: Array<Coche>;
  public mensaje!: string;

  seleccionarCochePadre(event: Coche): void {
    this.mensaje = 'Coche seleccionado!!!' + ', Marca: ' + event.marca;
  }

  constructor() {
    this.coches = [
      new Coche('Ford', 'Mustang', 0, 320, 30, false),
      new Coche('Kia', 'Picanto', 0, 150, 5, false),
      new Coche('Ferrari', 'Julietta', 0, 320, 40, false)
    ]
  }

  ngOnInit(): void {
  }

}
