import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador/contador.component';
import { ListadoComponent } from './animes/listado/listado.component';
import { AnimeComponent } from './animes/anime/anime.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListadoComponent,
    AnimeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
