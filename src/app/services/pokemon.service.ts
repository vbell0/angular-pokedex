import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }

  async carregarPokemons() {
    const result = await this.httpClient
          .get<any>("https://pokeapi.co/api/v2/pokemon?limit=501")
          .toPromise();
  
    this.pokemons = result.results;
  };
};
