import { Coche } from "../entidades/coche";

export class ServicioCoches {

    private coches:Coche[] = [];
    private contador:number =0;

    constructor() {
        this.coches.push(new Coche(1,'SEAT','124 Sport', 115,'Coupe'));
        this.coches.push(new Coche(2,'Citroen','Xara', 125,'5 puertas'));
        this.coches.push(new Coche(3,'Renault','Clio', 90,'Ranchera'));
        this.contador = 3;
    }

    public listar():Coche[] {
        return this.coches;
    }

    public insertar(coche:Coche):void {
        this.contador++;
        coche.id = this.contador;
        this.coches.push(coche);
    }

    public buscar(id:number):Coche {
       for(let coche of this.coches) {
            if(coche.id == id) {
                return coche;
            }
       }
       return null;
    }

}