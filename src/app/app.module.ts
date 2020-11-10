import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//NOMBRE DE LA CLASE
import { PrimerComponente } from './../components/primercomponente/primercomponent.component';
import { CiclosVida } from './../components/ciclosdevida/ciclosdevida.component';
import { Deportes } from './../components/deportes/deportes.component';
import { NumerosRandom } from './../components/numerosrandom/numerosrandom.component';
import { PositivoNegativo0 } from './../components/positivonegativo0/positivonegativo0.component';

@NgModule({
  declarations: [
    AppComponent, PrimerComponente, CiclosVida, Deportes, NumerosRandom, PositivoNegativo0
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
