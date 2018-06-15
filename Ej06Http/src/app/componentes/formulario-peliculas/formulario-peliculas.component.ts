import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../entidades/pelicula';
import { PeliculasService } from '../../servicios/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.css']
})
export class FormularioPeliculasComponent implements OnInit {

  public pelicula:Pelicula;
  public mensaje:string = null;

  constructor(private peliculasService:PeliculasService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { 
    let idPelicula:number = activatedRoute.snapshot.params['idPelicula'];
    
    this.vaciarFormulario();
    if ( typeof idPelicula != 'undefined' ){
      let that = this;
      peliculasService.buscarPelicula(idPelicula).
        subscribe(function(data){
                    that.pelicula = data;
                  },
                  function(error){ console.log(error);} );
    } 

  }
  
  ngOnInit() {
  }
  
  public vaciarFormulario():void{
    this.pelicula = new Pelicula(null,null,null,null,null);
  }

  public insertarPelicula():void{
    
    let that = this;
    this.
      peliculasService.insertarPelicula(this.pelicula).
        subscribe(function(response){ 
                    sessionStorage.setItem("mensaje", response);
                    that.router.navigate(['listadoPeliculas']);
                  },
                  function(error){ that.mensaje = error.error });
  
  }

  public modificarPelicula():void{
    let that = this;
    this.
      peliculasService.modificarPelicula(this.pelicula).
        subscribe(function(response){ 
                    sessionStorage.setItem("mensaje", response);
                    that.router.navigate(['listadoPeliculas']);
                  },
                  function(error){ that.mensaje = error.error });
  }

  public borrarPelicula():void{
    let that = this;
    this.
      peliculasService.borrarPelicula(this.pelicula).
        subscribe(function(response){ 
                    sessionStorage.setItem("mensaje", response);
                    that.router.navigate(['listadoPeliculas']);
                  },
                  function(error){ that.mensaje = error.error });
  }

}
