import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../entidades/usuario';
import { LoginService } from '../../servicios/login.service';
import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario:Usuario;
  public mensaje:string = null;

  constructor(private router: Router, private loginService: LoginService, private sesionService: SesionService) { 
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  login() {
    console.log("hoasdf");
    this.loginService.login(this.usuario).  // porque el servicio devuelve un observable
      subscribe( usuario => {
        this.sesionService.add("usuario", usuario);
        this.router.navigate(['/principal']);

      },
                error => {this.mensaje = 'Credenciales incorrectas'});
  }
  
  registro() {
    this.router.navigate(['registro']);
  }

}
