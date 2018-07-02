import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CondicionesComponent } from './componentes/condiciones/condiciones.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { AppRutasModule } from './app.rutas.module';
import { ProductoComponent } from './componentes/producto/producto.component';
import { PedidoComponent } from './componentes/pedido/pedido.component';
import { CestaComponent } from './componentes/cesta/cesta.component';
import { CompraComponent } from './componentes/compra/compra.component';




@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PrincipalComponent,
    LoginComponent,
    RegistroComponent,
    CondicionesComponent,
    InicioComponent,
    PerfilComponent,
    ProductoComponent,
    PedidoComponent,
    CestaComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRutasModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
