import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListadoPeliculasComponent } from './componentes/listado-peliculas/listado-peliculas.component';
import { FormularioPeliculasComponent } from './componentes/formulario-peliculas/formulario-peliculas.component';
import { PeliculasService } from './servicios/peliculas.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    InicioComponent,
    ListadoPeliculasComponent,
    FormularioPeliculasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path : '',
        component : InicioComponent
      },
      {
        path : 'inicio',
        component : InicioComponent
      },
      {
        path : 'listadoPeliculas',
        component : ListadoPeliculasComponent
      },
      {
        path : 'formularioPeliculas',
        component : FormularioPeliculasComponent
      },
      {
        path : 'formularioPeliculas/:idPelicula',
        component : FormularioPeliculasComponent
      }
    ])
  ],
  providers: [ PeliculasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
