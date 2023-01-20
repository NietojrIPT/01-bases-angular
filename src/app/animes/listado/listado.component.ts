import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent   {
title: string = 'Listado de Animes'
animes: string[] = ['Horimiya', 'Sono Visque', 'Full Metal', 'Deamons Slider'];


eraseAnime(){
  console.log('borrando');
  if (this.animes.length > 0) {
    this.animes.pop();
  } else {
    alert('No hay mas anime para borrar');
  }

}

}
