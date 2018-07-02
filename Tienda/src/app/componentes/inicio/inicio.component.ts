import { Component, OnInit } from '@angular/core';
import { Producto } from '../../entidades/producto';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent implements OnInit {

  public productos: Producto[] = []; // para que no se queje el ngIf que tenemos en el html lo inicializamos con array vacío, ya que productos es asíncrono.
  public categoria: string;

  constructor(private productosService: ProductosService) { 
    productosService.listarProductos()
      .subscribe( productos => this.productos=productos,
                  error => console.log(error));

  }

  ngOnInit() {
  }


  public buscar():void {
    this.productosService.listarProductosCategoria(this.categoria)
      .subscribe(productos => this.productos=productos,
        error => console.log(error))
  }

  
}


