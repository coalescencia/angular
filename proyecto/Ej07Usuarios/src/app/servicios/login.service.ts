import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../entidades/usuario';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
  public login(usuario: Usuario):Observable<any> {

    var cabeceras = new HttpHeaders({
      Authorization: "Basic " + btoa(usuario.login + ":"+usuario.password)
     });

    let url = "http://localhost:8000/usuarios/credenciales?login="+usuario.login+"&password="+usuario.password;
  

    return this.http.get(url, { headers:cabeceras});
  }

  public logout() {
    
  }




}
