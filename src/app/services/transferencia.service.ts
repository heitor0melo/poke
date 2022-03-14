import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Transferencia, PokeResponse, PokerUnico } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: Transferencia) {
    this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  incrementListPokemon(count: number): Observable<any> {
    const params = new HttpParams().append('limit', count.toString());
    return this.httpClient.get(this.url, { params });
  }

  todas() {
    return this.httpClient.get<PokeResponse>(this.url);
  }


  unico(a) {
    return this.httpClient.get<PokerUnico>(a);
  }

  private hidratar(transferencia: Transferencia) {
    transferencia.data = new Date();
  }
}
