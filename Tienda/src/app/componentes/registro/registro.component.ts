import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../entidades/usuario';
import { SesionService } from '../../servicios/sesion.service';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  public confirmacionPw: string;   
  public errorLogin: string = '';
  


  constructor(private router: Router, private sesionService: SesionService,
              private usuariosService:UsuariosService) {

               }

  ngOnInit() {
  }

  comprobarLogin() {
     this.usuariosService.comprobarExisteLogin(this.usuario.login).  // porque el servicio devuelve un observable
      subscribe( 
       resultado => {
         this.errorLogin = 'Login ya existe'; 
       },
       error => {
        this.errorLogin = '';
       });      
  }

  siguiente() {
    // validar
    this.sesionService.add("usuario", this.usuario);
    this.router.navigate(['/condiciones']);
  }

}
