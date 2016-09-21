import { OnInit, Component } from '@angular/core';
import {PokemonService } from './pokemon.service';
import {Pokemon} from './pokemon';


@Component({
    selector: 'my-app',
    providers: [PokemonService],
    template: `
        <h1>My Pokedex</h1>

        <nav>
            <a routerLink="/">HOME</a>
        </nav>

        <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit {

    pokemonList: Pokemon[];

    pokemonTypes: string[] = [
        "Grass",
        "Fire",
        "Water",
        "Electric",
        "Normal",
        "Bug",
        "Fairy",
        "Poison",
        "Ground"
    ];

    selectedPokemon: Pokemon;

    constructor(private pokemonService: PokemonService){}

    ngOnInit(): void {
        this.pokemonService.getPokemonList().then(list => this.pokemonList = list);
    }

    selectPokemon(pokemon: Pokemon): void {
        this.selectedPokemon = pokemon;
    }
}
