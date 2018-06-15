
export class ServicioCarrocerias {

    private carrocerias:string[] = ['3 puertas', '4 puertas', '5 puertas', 'Ranchera', 'Monovolumen','Coupe', 'SUV', 'Descapotable', 'Familiar'];

    public listar():string[]{
        return this.carrocerias;
    }

}