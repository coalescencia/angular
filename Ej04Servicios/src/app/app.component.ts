import { Component } from '@angular/core';
import { AppComponentService } from './servicios/app-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // en el constructor de un componente o un servicio nos pueden inyectar referencias
  // a objetos del framework, por ejemplo:
  // activateRouter
  // router
  // http
  //...
  // referencias a clases nuestras (manejadas por el framework)
  // servicios 
  // componentes

  constructor(private appComponentService: AppComponentService) {
    console.log("creando AppComponent");

  }

}
