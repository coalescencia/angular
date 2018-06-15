import { Component, OnInit } from '@angular/core';
import { AppComponentService } from '../../servicios/app-component.service';

@Component({
  selector: 'app-padre1',
  templateUrl: './padre1.component.html',
  styleUrls: ['./padre1.component.css']
})
export class Padre1Component implements OnInit {

  constructor(private appComponentService: AppComponentService) { 

    console.log("creando Padre 1 component")

  }

  ngOnInit() {
  }

}
