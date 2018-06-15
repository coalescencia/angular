import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CestaComponent } from './componentes/cesta/cesta.component';
import { CestaService } from './servicios/cesta.service';

@NgModule({
  declarations: [
    AppComponent,
    CestaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ CestaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
