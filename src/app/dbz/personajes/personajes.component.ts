import { Component, Input, OnInit } from '@angular/core';
import { PersonajeRq } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent   {

// @Input() DataPersonaje: PersonajeRq[] = [];

get DataPersonaje(){
  return this.dbzService.personajes;
}

constructor(private dbzService: DbzService){}



}
