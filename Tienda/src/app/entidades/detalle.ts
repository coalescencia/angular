import { Producto } from "./producto";

export class Detalle {

    constructor (public cantidad: number = null,
                 public precio: number = null,
                 public producto: Producto = null)        
                
                {

                 }

}