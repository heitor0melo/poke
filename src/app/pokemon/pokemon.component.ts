import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransferenciaService } from '../services/transferencia.service';
import { PokerUnico, RootObject } from '../models/transferencia.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  idPokemon: string = '';
  pokemon: PokerUnico;
  movesPokemon: any;
  abilidades: any;
  imagens: any;
  temFavorito: boolean = false;
  favoritos: RootObject[] = [];

  constructor(private route: ActivatedRoute, private service: TransferenciaService) { }

  ngOnInit(): void {

    this.idPokemon = this.route.snapshot.params.nome;
    console.log("pokemon", this.idPokemon);
    let url = `https://pokeapi.co/api/v2/pokemon/${this.idPokemon}/`

    this.service.unico(url).subscribe((a) => {
      this.pokemon = a;
      console.log(a);

      this.movesPokemon = a.moves.map((moves) => moves.move.name).join(', ')
      this.abilidades = a.abilities.map((abilitys) => abilitys.ability.name).join(', ')
      this.imagens = Object.values(a.sprites).filter((x) => typeof x == "string")
      this.verificarFavorito(a as any);
    });
  }

  addFavorito(data: RootObject) {
    let favoritos = [];
    var pokemonsStorage = localStorage.getItem('favoritos');

    if (pokemonsStorage !== null) {
      favoritos = JSON.parse(pokemonsStorage);
    }
    favoritos.push(data);

    const encontrado = favoritos.includes(data.id);

    if (encontrado) {
      this.verificarFavorito(favoritos as any);
      return;
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    this.temFavorito = true;

  }

  verificarFavorito(data: RootObject) {
    var pokemons = localStorage.getItem('favoritos');

    if (pokemons && data) {
      var array: [] = JSON.parse(pokemons);
      const poke = array.filter(value => {
        return value['id'] === data.id;
      })
      if (poke.length > 0) return this.temFavorito = true;
    }
    return this.temFavorito = false;
  }

  deletarPokemon(data: RootObject) {
    let favoritos = [];
    const storage = localStorage.getItem('favoritos');

    if (storage !== null) {
      favoritos = JSON.parse(storage);
    }

    const dado = favoritos.filter((dados: any) => dados.id != data.id);
    localStorage.setItem('favoritos', JSON.stringify(dado));
    this.temFavorito = false;
  }

}
