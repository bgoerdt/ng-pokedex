import { OnInit, Component } from '@angular/core';
import {PokemonService } from './pokemon.service';
import {Pokemon} from './pokemon';
import {Router } from '@angular/router';

@Component({
    selector: 'my-pokemon',
    providers: [PokemonService],
    template: `
        <h2>Pokemon</h2>
        <ul>
            <li *ngFor="let pokemon of pokemonList"
                (click)="selectPokemon(pokemon)">
                <span>{{pokemon.id}}</span> {{pokemon.name}} | {{pokemon.type}}
            </li>
        </ul>

        <button *ngIf="selectedPokemon" (click)="goToDetail()">View {{selectedPokemon.name}} Details</button>
    `
})
export class PokemonComponent implements OnInit {

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

    constructor(private pokemonService: PokemonService, private router: Router){}

    ngOnInit(): void {
        this.pokemonService.getPokemonList().then(list => this.pokemonList = list);
    }

    selectPokemon(pokemon: Pokemon): void {
        this.selectedPokemon = pokemon;
    }

    goToDetail(): void {
        let link = ['detail', this.selectedPokemon.id];
        this.router.navigate(link);
    }
}
