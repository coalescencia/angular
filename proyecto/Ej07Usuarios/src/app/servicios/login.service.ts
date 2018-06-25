import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../entidades/usuario';
import { Observable} from 'rxjs';
import { SesionService } from './sesion.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private sesionService: SesionService) { }

  public getCabeceraAuth(): HttpHeaders {
    let usuario: Usuario = this.sesionService.get("usuario");
    return new HttpHeaders({
      Authorization: "Basic " + btoa(usuario.login + ":"+usuario.password)
     });
  }
  
  public login(usuario: Usuario):Observable<any> {

    var cabeceras = new HttpHeaders({
      Authorization: "Basic " + btoa(usuario.login + ":"+usuario.password)
     });

    let url = "http://localhost:8000/usuarios/credenciales";  

    return this.http.get(url, { headers:cabeceras});
  }

  public logout() {
    
  }

}
