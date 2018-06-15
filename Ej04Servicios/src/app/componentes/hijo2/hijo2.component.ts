import { Component, OnInit } from '@angular/core';
import { AppComponentService } from '../../servicios/app-component.service';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component implements OnInit {

  constructor(private appComponentService: AppComponentService) {

    console.log("Creando hijo 2 Component");

   }

  ngOnInit() {
  }

}
