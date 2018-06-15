import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { Pagina1Component } from './componentes/pagina1/pagina1.component';
import { Pagina2Component } from './componentes/pagina2/pagina2.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    Pagina1Component,
    Pagina2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
      path: '',
      component: Pagina1Component
    },
      {
      path: 'pagina1',
      component: Pagina1Component
    },
      {
      path: 'pagina2/:dato1/:dato2',
      component: Pagina2Component
    },
    { path: '**', component: Pagina1Component }
    // esto es si tecleas cualquier otra ruta te lleva a ese componente, es importante que sea el último path en la ruta
  
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
