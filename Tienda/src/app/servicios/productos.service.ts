import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfiguracionService } from './configuracion.service';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Producto } from '../entidades/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient,
              private cfg: ConfiguracionService,
              private loginService: LoginService) {                
               }

    public listarProductos():Observable<any>{
      let cabeceras:HttpHeaders = this.loginService.getCabeceraAuth();
      return this.http.get(this.cfg.url+"/productos", { headers: cabeceras });
  }
/*   public listarProductosCategoria(producto:Producto):Observable<any>{
    return this.http.put(this.cfg.url+"/usuarios/"+usuario._id, usuario, {headers: this.loginService.getCabeceraAuth() });
  } */
  
  public listarProductosCategoria(categoria:string):Observable<any>{
    let cabeceras:HttpHeaders = this.loginService.getCabeceraAuth();
    return this.http.get(this.cfg.url+"/productos/categorias/"+categoria, { headers: cabeceras });
}

}
