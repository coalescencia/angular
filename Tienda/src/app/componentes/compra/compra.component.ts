import { Component, OnInit } from '@angular/core';
import { SesionService } from '../../servicios/sesion.service';
import { PedidosService } from '../../servicios/pedidos.service';
import { Pedido } from '../../entidades/pedido';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  public pedido: Pedido;
  constructor(private router: Router,
              private pedidoService: PedidosService,
              private sesionService: SesionService ) {
    
      this.pedido = pedidoService.getPedido(); // recordar que siempre se genera un pedido nada más acceder a la aplicación
      // colocamos la dirección del usuario en el pedido:
      let usuario = sesionService.get("usuario");
      this.pedido.direccion = usuario.direccion;

   }

  ngOnInit() {
  }

  public finalizarComprar() {
    this.pedidoService.realizarPedido()
      .then( () => this.router.navigate( ['/principal/inicio']))
      .catch(error => console.log(error));

  }

}
