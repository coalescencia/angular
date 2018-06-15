import { Injectable } from '@angular/core';
import { DetallePedido } from '../entidades/detallePedido';

@Injectable({
  providedIn: 'root'
})
export class CestaService {

  private detalles:DetallePedido[] = [];
  
  constructor() { }

  public addDetalle(detalle:DetallePedido):void{
    this.detalles.push(detalle);
  }

  public getCesta():DetallePedido[]{
    return this.detalles;
  }

}
