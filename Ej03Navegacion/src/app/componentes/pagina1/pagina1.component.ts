import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  
  // inyección de dependencias:
  // Angular proporciona los parámetros del constructor (en la medida de sus posibilidades)
  constructor(private router:Router) { 
    // el constructor recibe la inyección de dependencia como parámetro

  }

  ngOnInit() {
  }

  public navegacionProgramatica() {
    // para navegar programáticamente necesitamos el objeto 'router'
    console.log("navegación programática");
    this.router.navigate(['/pagina2', '333','444']);
  }
}
