import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../entidades/pelicula';

//Hasta angular 4.2
//import { Http } from '@angular/http';

//Desde angular 4.3
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculasService } from '../../servicios/peliculas.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  public peliculas:Pelicula[];
  public mensaje:string = null;

  constructor(private http:HttpClient,
              private peliculasService:PeliculasService) { 
    this.getPeliculas();

    //Buscamos un posible mensaje en el sessionStorage. Si existe
    //lo colocamos en el atributo 'mensaje' para que se muestre en la página
    let mensaje = sessionStorage.getItem("mensaje");
    if(mensaje){
      this.mensaje = mensaje;
      sessionStorage.removeItem("mensaje");
    }

  }
              
  ngOnInit() {
  }

  public getPeliculas(){

    /*
    let that = this;
    let observable = this.http.get("http://localhost:7000/peliculas");
    observable.subscribe( function(data:Pelicula[]){ 
                            that.peliculas = data;
                          },
                          function(error){ console.log(error); },
                          function(){ console.log("YA") } );
    */

   /* let that = this;
    let observable:Observable<any> = this.peliculasService.listarPeliculas();
    observable.subscribe(function(peliculas){
                            that.peliculas = peliculas;
                         },
                         function(error){ console.log(error) });
*/

    // lo mismo con expresiones lambda:
   
    let observable:Observable<any> = this.peliculasService.listarPeliculas();
    observable.subscribe(peliculas => this.peliculas = peliculas,
                         error =>  console.log(error));
  }

}

