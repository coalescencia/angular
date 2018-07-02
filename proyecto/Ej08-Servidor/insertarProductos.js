// Mongoose es un Object Document Mapper (ODM)


let mongoose = require('mongoose');

// esto hay que hacerlo una sola vez para toda la aplicación: 
mongoose.Promise = global.Promise;

// conectamos con la base de datos
let url = "mongodb://localhost:27017/bbdd";
let promesa = mongoose.connect( url ); // devuelve una promesa
promesa.then( conexion => pruebas())
        .catch( error => console.log (error));
console.log("FIN");


// definimos el esquema:
function pruebas() {
    
    let esquemaProducto = new mongoose.Schema ( {
   
        codigo:      String,
        nombre:      String,
        descripcion: String,
        precio:      Number,       
        imagen:      String,
        categoria:   String     
    });

    // obteniendo el modelo:
   Producto = mongoose.model('productos', esquemaProducto);  // variable global, no recomendado

  

   /* let usr = 
    {
        codigo: "9876",
        nombre: "chandal",
        descripcion: "de fibra",
        precio: 80,       
        imagen: "otra mas",
        categoria: "deporte" 
    }

    */


    /*
    let p1 = new Producto ( {
        codigo: "9876",
        nombre: "chandal",
        descripcion: "de fibra",
        precio: 80,       
        imagen: "otra mas",
        categoria: "deporte" 

    });
    let p2 = new Producto ( {
        codigo: "43665",
        nombre: "mochila",
        descripcion: "de alta capacidad",
        precio: 76,       
        imagen: "tercera imagen",
        categoria: "deportes" 
        
    });

    p1.save()
        .then(() => p2.save())
        .then(() => p3.save())
        .then(() => mongoose.disconnect());

    */

    insertar(usr)
        .then( ok => console.log(ok))
        .catch( error => console.log(error));

}

function insertar(producto) {    // retorna una promesa
      
 /*   if(typeof usuario._id != 'undefined') {
        return new Promise( function(resolve, reject) {            
            reject({ status: 400, texto: 'No se puede insertar con _id'});
        })
       
    } 
    if( !usuario.nombre || usuario.nombre.trim() =='' ||
    !usuario.login || usuario.login.trim() == '' ||
    !usuario.password || usuario.password.trim() =='' ) {   
        return new Promise( function(resolve, reject) {            
            reject({ status: 400, texto: 'Credenciales están mal majete'});            
        });   
    }    */
    
    producto = new Producto(producto); // sólo creo el objeto de mongoose si ha pasado los if
    
    return new Promise(function(resolve, reject) {
        
        producto.save() //devuelve una promesa
            .then( rs => resolve({ status: 200, texto: 'productos insertados '}) )
            .catch( error => {
                reject({ status: 500, texto: 'pedazo error 500'});
             })
     });
}