import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../entidades/usuario';
import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario:Usuario = new Usuario();
  public confirmacionPw: string; 

  constructor(private router: Router,
              private sesionService:SesionService) {

               }

  ngOnInit() {
  }

  siguiente() {
    // validar
    this.sesionService.add("usuario", this.usuario);
    this.router.navigate(['/condiciones']);
  }

}
