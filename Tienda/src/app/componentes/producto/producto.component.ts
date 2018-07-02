import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../entidades/producto';
import { Detalle } from '../../entidades/detalle';
import { PedidosService } from '../../servicios/pedidos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

    @Input() public producto: Producto = new Producto();  // el  @Input() significa que producto no es responsabilidad de este componente, alguien se lo dará
    // el selector de producto se usa en inicio.html. Por si acaso nadie se lo da crea uno con new Producto()
    public detalle: Detalle;

    constructor(private pedidosService: PedidosService) { 
      this.detalle = new Detalle();
      this.detalle.cantidad = 1;
    }  

    ngOnInit() {
    }

    public comprar():void {
      this.detalle.precio = this.producto.precio;
      this.detalle.producto = this.producto;
      this.pedidosService.addDetallePedido(this.detalle);
    }

    public borrar():void {
      
    }

}
