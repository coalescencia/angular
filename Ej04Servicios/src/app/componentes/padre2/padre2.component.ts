import { Component, OnInit } from '@angular/core';
import { AppComponentService } from '../../servicios/app-component.service';

@Component({
  selector: 'app-padre2',
  templateUrl: './padre2.component.html',
  styleUrls: ['./padre2.component.css'],
  providers: [AppComponentService] // es opcional agregar los providers aquí
})
export class Padre2Component implements OnInit {

  constructor(private appComponentService:AppComponentService) {  // le estamos inyectando el servicio al componente pasandolo como parámetro al constructor
    console.log("creando padre 2 Component");
   }

  ngOnInit() {
  }

}
