import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CochesComponent } from './componentes/coches/coches.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
    CochesComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
