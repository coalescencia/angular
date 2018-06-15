import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  public url:string = "http://localhost:7000";
  //...
  
  constructor() {   }
}
