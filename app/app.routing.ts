import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonComponent }      from './pokemon.component';
import {PokemonDetailComponent} from './pokemon-detail.component';
const appRoutes: Routes = [
  {
    path: '',
    component: PokemonComponent
  },
  {
      path: 'detail/:id',
      component: PokemonDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);