import { Usuario } from "./usuario";
import { Detalle } from "./detalle";

export class Pedido {

    constructor (public _id: string = undefined,
                 public codigo: string = null,
                 public fecha: string = null,
                 public total: number = 0,
                 public direccion: string = null,
                 public usuario: Usuario = null,
                 private detalles: Detalle[] = []) {

                 }

    public addDetalle(detalle: Detalle):void {
        this.total = this.total + detalle.cantidad*detalle.precio;
        this.detalles.push(detalle);
    }

    public eliminarDetalle(detalle: Detalle):void {

    } 
    
    public getDetalles():Detalle[] {
        return this.detalles;
    }

}


