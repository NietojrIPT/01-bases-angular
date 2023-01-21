import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent } from './anime/anime.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [
    AnimeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnimeComponent,
    ListadoComponent
  ]
})
export class AnimesModule { }
