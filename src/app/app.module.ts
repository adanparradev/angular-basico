
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';

import { HeroesModule } from './heroes/heroes.module';
/*import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';*/


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent
    /*HeroeComponent,
    ListadoComponent*/
       
  ],
  imports: [
    BrowserModule,
    HeroesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
