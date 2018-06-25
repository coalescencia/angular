export class Usuario {
    constructor(public _id:string = undefined,
                public nombre:string = null,               
                public login:string = null,
                public password:string = null,
                public idioma:string = null,
                public mail:string = null,
                public telefono:string = null,
                public direccion: string = null ){
    }
}