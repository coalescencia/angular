import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Padre1Component } from './componentes/padre1/padre1.component';
import { Padre2Component } from './componentes/padre2/padre2.component';
import { Hijo1Component } from './componentes/hijo1/hijo1.component';
import { Hijo2Component } from './componentes/hijo2/hijo2.component';
import { AppComponentService } from './servicios/app-component.service';

@NgModule({
  declarations: [
    AppComponent,
    Padre1Component,
    Padre2Component,
    Hijo1Component,
    Hijo2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
      path: 'padre1',
      component: Padre1Component
    },
      {
      path: 'padre2',
      component: Padre2Component
    }
    ])
  ],
  providers: [AppComponentService], // damos de alta un servicio, es accesible en toda la aplicación
  bootstrap: [AppComponent]
})
export class AppModule { }
