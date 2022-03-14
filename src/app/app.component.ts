import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';
import { PokerUnico } from './models/transferencia.model';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];
  pokemon: any;
  movesPokemon: any;
  abilidades: any;
  imagens: any;

  constructor(private service: TransferenciaService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private titleService: Title) { }

  ngOnInit(): void {
    this.router.events
      .pipe(map(() => this.activeRoute))
      .pipe(
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        })
      )
      .pipe(switchMap((route) => route.data))
      .subscribe((event) => this.titleService.setTitle(event.title));
  }

  transferir($event) {
    this.service.adicionar($event).subscribe(x => console.log(x));
  }

  selecionar($event) {
    const a: PokerUnico = $event
    console.log("Selecionar", a);
    this.pokemon = a
    this.movesPokemon = a.moves.map((moves) => moves.move.name).join(', ')
    this.abilidades = a.abilities.map((abilitys) => abilitys.ability.name).join(', ')
    this.imagens = Object.values(a.sprites).filter((x) => typeof x == "string")
    console.log("this.imagens", this.imagens);


    //this.novaTransferenciaComponent.receber($event)
    // this.service.unico($event).subscribe(x => {
    //   console.log(x)
    //   this.pokemon = x
    // });
  }
}
