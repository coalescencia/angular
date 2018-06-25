import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../entidades/usuario';
import { ConfiguracionService } from './configuracion.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private cfg:ConfiguracionService,
    private http:HttpClient, private loginService: LoginService) { }

    public insertar(usuario:Usuario):Observable<any>{
      return this.http.post(this.cfg.url+"/usuarios/", usuario, {responseType: 'text'});
    }
    public modificar(usuario:Usuario):Observable<any>{
      return this.http.put(this.cfg.url+"/usuarios/"+usuario._id, usuario, {headers: this.loginService.getCabeceraAuth() });
    }
    public borrar(usuario:Usuario):Observable<any>{
      return null;
    }
    public listarUsuarios():Observable<any>{
      return null;
    }

    public comprobarExisteLogin(login: string):Observable<any> {
      return this.http.get(this.cfg.url+"/logins/"+login);
    }


}
