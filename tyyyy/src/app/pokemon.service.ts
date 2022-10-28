import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  searchPokemon(query: string) {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`;
    let obsPok= this.http.get(url);
    return obsPok;
  }

  searchPokemonDett(query: string) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${query}`;
    let obsDet= this.http.get(url);
    return obsDet;
  }
}
