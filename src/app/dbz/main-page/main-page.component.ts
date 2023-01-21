import { Component, OnInit } from '@angular/core';
import { PersonajeRq } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  personajes: PersonajeRq[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 12000
    },
    {
      nombre: 'Krilin',
      poder: 6000
    }
  ];

  nuevo: PersonajeRq = {
    nombre: 'Maestro Rochu',
    poder: 2500
  }

  newPers (dataPers: any){
    console.log(dataPers);
    this.personajes.push(dataPers);

  }




}
