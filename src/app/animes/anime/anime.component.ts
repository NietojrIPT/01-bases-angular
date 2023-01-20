import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent  {

  title: string = 'Listado de Anime';
  name: string = 'Horimiya';
  seasons: number = 1;

  get nameCapitalizado(): string{
    return this.name.toUpperCase();
  }

  gendersAnime(): string {
    return `${this.name} - ${this.seasons}`
  }

  changeName(): void{
    this.name = 'Sono visque';
  }

  changeSeason(): void {
    this.seasons = 2;

  }


}
