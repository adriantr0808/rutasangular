import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  @Input() car!: Coche;
  public mensaje!: string;
  @Output() seleccionarCoche: EventEmitter<any> = new EventEmitter();
  //METODO PARA SELECCIONAR UN ELEMENTO Y LLAMAR AL PADRE

  seleccionarCocheHijo(): void {
    //LLAMAMOS AL METODO DEL PADRE
    this.seleccionarCoche.emit(this.car);

  }

  constructor() {
    //CUANDO RECIBIMOS OBJETOS INPUT
    //NO PODEMOS UTILIZARLOS EN EL CONSTRUCTOR


  }

  ngOnInit(): void {
    this.comprobarEstado();
  }

  //METODO PARA COMPROBAR EL ESTADO Y LANZAR MENSAJES
  comprobarEstado(): boolean {
    if (this.car.estado == false) {
      this.mensaje = 'El coche está apagado';
      this.car.velocidad = 0;
      return false;
    } else {
      this.mensaje = 'El coche está encendido';
      return true;
    }
  }


  encenderCoche(): void {
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }

  acelerarCoche(): void {
    if (this.comprobarEstado() == false) {
      alert('El cochce no está encendido')
    } else {
      this.car.velocidad = this.car.velocidad + this.car.aceleracion;
      if (this.car.velocidad > this.car.velocidadMaxima) {
        this.car.velocidad = this.car.velocidadMaxima;
      }
    }

  }


}
