import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input() pokemon?: string;
  @Input() input_number?: number | string;

  getImagePokemon() {
    const formated = this.leadingZero(this.input_number!);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formated}.png`
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
}
