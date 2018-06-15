import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../entidades/pelicula';
import { ConfiguracionService } from './configuracion.service';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private cfg:ConfiguracionService,
             private http:HttpClient) { }

  public listarPeliculas():Observable<any>{    
    return this.http.get(this.cfg.url+"/peliculas");
  }

  public buscarPelicula(id:number):Observable<any>{
    return this.http.get(this.cfg.url+"/peliculas/"+id);
  }

  public insertarPelicula(pelicula:Pelicula):Observable<any>{
    return this.http.post(this.cfg.url+"/peliculas", pelicula, { responseType : 'text' });
  }

  public modificarPelicula(pelicula:Pelicula):Observable<any>{
    return this.http.put(this.cfg.url+"/peliculas/"+pelicula.id, pelicula, { responseType : 'text' });
  }

  public borrarPelicula(pelicula:Pelicula):Observable<any>{
    return this.http.delete(this.cfg.url+"/peliculas/"+pelicula.id, { responseType : 'text' });
  }

}
