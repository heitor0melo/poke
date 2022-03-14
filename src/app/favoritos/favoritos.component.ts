import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  favoritos: any[] = [];
  constructor() { }

  ngOnInit(): void {
    let favoritos = [];
    var pokemonsStorage = localStorage.getItem('favoritos');

    if (pokemonsStorage !== null) {
      favoritos = JSON.parse(pokemonsStorage);
      this.favoritos = favoritos
      console.log("favoritos", favoritos);

    }
  }

}
