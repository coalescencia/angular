import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../entidades/usuario';
import { SesionService } from '../../servicios/sesion.service';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public usuario: Usuario;

  constructor(private sesionService: SesionService, private usuarioService: UsuariosService) { 
    this.usuario = sesionService.get("usuario");
}
ngOnInit() {
  }

  public guardar():void {
    this.usuarioService.modificar(this.usuario)
      .subscribe( resultado => console.log (resultado),
                  error => console.log(error));
  }

}
