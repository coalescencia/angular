import { Component, OnInit } from '@angular/core';
import { Coche } from '../../entidades/coche';
import { ServicioCoches } from '../../servicios/servicioCoches';
import { ServicioCarrocerias } from '../../servicios/servicioCarrocerias';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {
  
  private servicioCoches:ServicioCoches = new ServicioCoches();
  private servicioCarrocerias:ServicioCarrocerias = new ServicioCarrocerias();  

  public coche:Coche;
  public coches:Coche[];
  public carrocerias:string[];

  constructor() { 

    this.vaciarFormulario(); 
    this.carrocerias = this.servicioCarrocerias.listar();
    this.coches = this.servicioCoches.listar();
 
  }

  ngOnInit() {
  }

  public insertar():void{
    this.servicioCoches.insertar(this.coche);
    // con la doble vinculación [( )] en el html ya tenemos los datos del coche aquí
    this.vaciarFormulario();
  }

  public seleccionarCoche(id:number):void {
    let cocheBuscado = this.servicioCoches.buscar(id);
    this.coche = cocheBuscado;
    
  }


  public vaciarFormulario():void{
    this.coche = new Coche(null, null,null,null, '0'); // obligatorio indicar los 5 valores porque lo pusimos dentro del constructor Coche, el '0' es para que quede seleccionado el primer elemento del select carroceria
  }

}
