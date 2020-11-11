import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//NOMBRE DE LA CLASE
import { PrimerComponente } from './components/primercomponente/primercomponent.component';
import { CiclosVida } from './components/ciclosdevida/ciclosdevida.component';
import { Deportes } from './components/deportes/deportes.component';
import { NumerosRandom } from './components/numerosrandom/numerosrandom.component';
import { PositivoNegativo } from './components/positivonegativo/positivonegativo.component';
import { FormulariopersonaComponent } from './components/formulariopersona/formulariopersona.component';
import { FormsModule } from '@angular/forms';
import { SumarnumerosComponent } from './components/sumarnumeros/sumarnumeros.component';

@NgModule({
  declarations: [
    AppComponent, PrimerComponente, CiclosVida, Deportes, NumerosRandom, PositivoNegativo, FormulariopersonaComponent, SumarnumerosComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
