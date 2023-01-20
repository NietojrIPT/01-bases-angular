import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent   {
title: string = 'Listado de Animes'
animes: string[] = ['Horimiya', 'Sono Visque', 'Full Metal', 'Deamons Slider'];
animeErase: string = '';


eraseAnime(){
     this.animeErase = this.animes.pop() || '';
}

}
