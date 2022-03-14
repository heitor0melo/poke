import { Component, EventEmitter, Output, Input } from '@angular/core';
import { PokerUnico } from '../models/transferencia.model';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();
  @Input() pokemon: PokerUnico;
  @Input() movesPokemon: string;
  @Input() abilidades: string;
  @Input() imagens: string;

  //pokemon: any;

  valor: number;
  destino: number;

  //abilidades: any = this.pokemon.moves.map((moves)=>moves.move.name).join(',') ;


  transferir() {
    console.log('Solicitada nova transferência', this.pokemon);
    // const valorEmitir = { valor: this.valor, destino: this.destino };
    // this.aoTransferir.emit(valorEmitir);

    // this.limparCampos();
  }

  receber(a) {
    console.log("teste", a);

    //this.pokemon = a
  }
  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
