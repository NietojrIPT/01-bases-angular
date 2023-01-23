import { Component, OnInit } from '@angular/core';
import { PersonajeRq } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  constructor(private dbzService: DbzService){}


  nuevo: PersonajeRq = {
    nombre: 'Maestro Rochu',
    poder: 2500
  }

  get personajes(): PersonajeRq[]{
    return this.dbzService.personajes;
  }

  // newPers (dataPers: any){
  //   console.log(dataPers);
  //   // debugger;
  //   this.personajes.push(dataPers);
  // }

}
