import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CondicionesComponent } from './componentes/condiciones/condiciones.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { CestaComponent } from './componentes/cesta/cesta.component';
import { CompraComponent } from './componentes/compra/compra.component';

let rutasPrincipal = [
  { path: '',
  component: InicioComponent },
  { path: 'inicio',
    component: InicioComponent },
  {
    path: 'perfil',
    component: PerfilComponent },
   {
    path: 'cesta',
    component: CestaComponent },
    {
    path: 'compra',
    component: CompraComponent }
];


let rutas = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'condiciones',
    component : CondicionesComponent
  },
  {
    path : 'registro',
    component :RegistroComponent
  },
  {
    path : 'principal',
    component :PrincipalComponent,
    children :rutasPrincipal
  }
  
];

@NgModule({
    /*
  declarations: [
    AppComponent,
    CabeceraComponent,
    PrincipalComponent,
    LoginComponent,
    RegistroComponent,
    CondicionesComponent,
    InicioComponent,
    PerfilComponent
  ],
  */
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: [ RouterModule]
})
export class AppRutasModule { }
