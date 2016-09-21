import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {PokemonDetailComponent } from './pokemon-detail.component';
import {PokemonComponent} from './pokemon.component';

import {routing} from './app.routing';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, PokemonDetailComponent, PokemonComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
