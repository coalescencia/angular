import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../entidades/usuario';
import { ConfiguracionService } from './configuracion.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private cfg:ConfiguracionService,
    private http:HttpClient) { }

    public insertar(usuario:Usuario):Observable<any>{
      return this.http.post(this.cfg.url+"/usuarios/", usuario, {responseType: 'text'});
    }
    public modificar(usuario:Usuario):Observable<any>{
      return null;
    }
    public borrar(usuario:Usuario):Observable<any>{
      return null;
    }
    public listarUsuarios():Observable<any>{
      return null;
    }

 /*    public buscarUsuario(login:string, password:string):Observable<any>{
      return this.http.get(this.cfg.url+"/usuarios/credenciales/?log="+login+"&pw="+password);
    } */

}
