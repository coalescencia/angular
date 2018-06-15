import { Component } from '@angular/core';
import { Libro } from './entidades/libro';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public titulo:string = "hola buenas";
  public libro:Libro;

  constructor() {
    // lo que se ponga en el constructor se ejecuta antes de que se cargue el html
    this.libro =  new Libro(23,"el señor de las moscas", "streai", "23582345");
  }

  public botonDalePulsado() {
    console.log("boton pulsado");
  }

  public funcionNoVoid(ciudad:string):string {
    return "devolviendo algo " + ciudad;
  }

}
