import { ThrowStmt } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { PersonajeRq } from '../interfaces/dbz.interface';



@Injectable()
export class DbzService{

  private _personajes: PersonajeRq[] = [
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

      get personajes(): PersonajeRq[]{
        return [...this._personajes];
      }

    constructor(){}
    
      agragarPersonaje(person: PersonajeRq){
        this._personajes.push(person)
      }
}

