import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';
import { SesionService } from '../../servicios/sesion.service';
import { Usuario } from '../../entidades/usuario';

@Component({
  selector: 'app-condiciones',
  templateUrl: './condiciones.component.html',
  styleUrls: ['./condiciones.component.css']
})
export class CondicionesComponent implements OnInit {

  constructor(private usuarioService:UsuariosService, private router:Router, private loginService:LoginService, private sesionService:SesionService) { }

  ngOnInit() {
  }

  public registrar():void{
    let usuario:Usuario = this.sesionService.get("usuario");
    // asincronía, primero insertamos, cuando todo OK, nos logueamos, cuando está logueado se navega a la página principal ya logueado:
    this.usuarioService.insertar(usuario).
      subscribe( respuesta => {
              this.loginService.login(usuario).  // loginService devuelve un observable, por lo que debemos suscribirnos
                subscribe( usuario => {
                                  this.sesionService.add("usuario", usuario);
                                  this.router.navigate(['/principal']);
                            },
                            error => console.log(error));
                },
                error => console.log(error));           
                        
  }
 
}
 


