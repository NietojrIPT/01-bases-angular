import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent   {

  title   : string = 'Contador App';
  contador: number = 0;
  base    : number = 5;

  acumular(valor: number){
    this.contador+= valor;
  }

}
