import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  @Input() pokemons: any[];
  @Input() pokemon: any;
  @Output() aoClicar = new EventEmitter<any>();
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent = 1;

  countPage: number = 20;
  constructor(private service: TransferenciaService, private router: Router,) { }

  ngOnInit(): void {
    this.service.todas().subscribe((x) => (this.pokemons = x.results));
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  setPage(s: any) {
    console.log("pagina", s);
    this.pageEvent = s.pageIndex + 1

  }

  teste(pokemonUrl: any) {
    console.log('Solicitada nova transferência', pokemonUrl);
    this.service.unico(pokemonUrl.url).subscribe((x) => {
      this.pokemon = x;
      console.log(x);

      this.aoClicar.emit(x);
    });

  }
  goPage(row: any) {
    console.log("log", row, row.url.slice(34).slice(0, -1), "az");

    this.router.navigate(['/pokemon', row.url.slice(34).slice(0, -1)]);
  }

  load() {
    this.countPage = this.countPage + 20;
    this.service.incrementListPokemon(this.countPage)
      .subscribe(poke => {
        this.pokemons = poke.results;

      })
  }
}
