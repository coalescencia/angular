import { Component, OnInit } from '@angular/core';
import { DetallePedido } from '../../entidades/detallePedido';
import { CestaService } from '../../servicios/cesta.service';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']/*,
  providers: [ CestaService ]*/
})
export class CestaComponent implements OnInit {

  public detalle:DetallePedido;
  public detalles:DetallePedido[] = [];

  constructor(private cestaService:CestaService) {
    this.vaciarFormulario();
    this.actualizarDetalles();
  }

  public addDetalle():void{
    this.cestaService.addDetalle(this.detalle);
    this.vaciarFormulario();
    this.actualizarDetalles();
  }
  
  public vaciarFormulario(){
    this.detalle = new DetallePedido(null,null);
  }

  private actualizarDetalles(){
    this.detalles = this.cestaService.getCesta();
  }
 
  ngOnInit() {
  }

}
