import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {
  public dato1:string;
  public dato2:string;
  
  constructor(private route:ActivatedRoute) { 

    // si este componente aparece en la pantalla, en route aparece la ruta por la que se ha accedido, incluido sus parámetros si los tuviera
  this.dato1 = route.snapshot.params['dato1'];
  this.dato2 = route.snapshot.params['dato2'];

  }

  ngOnInit() {
  }

}
