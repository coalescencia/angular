import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {

  constructor() { 
    console.log("creando app component service");
  }
}
