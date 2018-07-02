import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../servicios/pedidos.service';
import { Pedido } from '../../entidades/pedido';
import { SesionService } from '../../servicios/sesion.service';
import { Detalle } from '../../entidades/detalle';


@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {

  public pedido: Pedido;
 
  constructor( private pedidoService: PedidosService, sesionService:SesionService) {
     this.pedido = pedidoService.getPedido();
   }

  ngOnInit() {
  }

  
  
}
