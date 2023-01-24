import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonajeRq } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  @Input() nuevo: PersonajeRq = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService){}
  // @Output() onNewPersonaje: EventEmitter <PersonajeRq> = new EventEmitter ();

  add(){
    if (this.nuevo.nombre.trim().length === 0) {
      console.log('no hay nada');
      return;
    }
    console.log(this.nuevo);
    this.dbzService.agragarPersonaje(this.nuevo);

    // this.onNewPersonaje.emit(this.nuevo)
    this.nuevo = {nombre:'', poder:0}
  }




}
