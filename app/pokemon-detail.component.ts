import { OnInit, Input, Component } from '@angular/core';
import {Pokemon} from './pokemon';
import { ActivatedRoute, Params } from '@angular/router';
import {PokemonService} from './pokemon.service';

@Component({
    selector: 'my-pokemon-detail',
    providers: [PokemonService],
    template: `
    <div *ngIf="pokemon">
        <h2>{{pokemon.name}}</h2>
        <div><label>id:</label>{{pokemon.id}}</div>
        <div>
            <label>name:</label>
            <input [(ngModel)]="pokemon.name" />
        </div>
        <div>
            <label>type:</label>
            <select [(ngModel)]="pokemon.type">
                <option *ngFor="let type of pokemonTypes" [value]="type">{{type}}</option>
            </select>			
        </div>
    </div>
    `
})
export class PokemonDetailComponent implements OnInit {

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

    @Input()
    pokemon: Pokemon;


    constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.pokemonService.getPokemon(id).then(p => this.pokemon = p);
        });
    }
}
