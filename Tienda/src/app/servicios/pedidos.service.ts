import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfiguracionService } from './configuracion.service';
import { LoginService } from './login.service';
import { Detalle } from '../entidades/detalle';
import { SesionService } from './sesion.service';
import { Pedido } from '../entidades/pedido';
import { Usuario } from '../entidades/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

    constructor(private http: HttpClient,
                private cfg: ConfiguracionService,
                private loginService: LoginService,
                private sesion: SesionService) {
                  
        sesion.add("pedido", new Pedido()); 
    }

    public addDetallePedido(detalle: Detalle) {
        let pedido: Pedido = this.sesion.get("pedido");
        //la primera vez que se le llame no hay ningún detalle en la sesión
        console.log(pedido);
        pedido.addDetalle(detalle);

    }

    // Añade un pedido que está en 'SesionService', sólo pedidos.service sabe dónde está el pedido
    public eliminarDetallePedido( detalle:Detalle) {
      let pedido: Pedido = this.sesion.get("pedido");
      pedido.eliminarDetalle(detalle);
    }

    public getPedido():Pedido {
      return this.sesion.get("pedido");
    }

    public realizarPedido() {
      let usuario:Usuario = this.sesion.get("usuario");
      let pedido:Pedido = this.sesion.get("pedido");
      pedido.usuario = usuario;
      
      return new Promise( (resolve, reject) => {
        this.http.post(this.cfg.url+"/pedidos", pedido, { responseType: "text", headers: this.loginService.getCabeceraAuth() })  // una vez finalizado el pedido, borramos el pedido y creamos uno nuevo vacío
          .subscribe( resultado => {
                            this.sesion.add("pedido", new Pedido()); // pisa la sesión anterior la deja vacía
                            resolve();                            
                   },
                   error => reject(error));
  
        });
        
    }

    }


}
