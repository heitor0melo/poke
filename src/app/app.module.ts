import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PokemonComponent } from './pokemon/pokemon.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './materil.module';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { HeaderComponent } from './header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, NovaTransferenciaComponent, ExtratoComponent, PokemonComponent, FavoritosComponent, HeaderComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, NoopAnimationsModule, MaterialExampleModule, NgxPaginationModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
