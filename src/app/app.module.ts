import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimesModule } from './animes/animes.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
