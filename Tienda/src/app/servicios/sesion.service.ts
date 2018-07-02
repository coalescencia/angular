import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private sesion:any[] = [];

  public add(clave:string, objeto:any):void {
    // en lugar de usar sessionStorage agregamos objetos con una clave.
    this.sesion[clave] = objeto;
  }

  public get(clave:string):any {
    return this.sesion[clave]; // si no existe la clave devuelve undefined
  }

  constructor() { }
}
