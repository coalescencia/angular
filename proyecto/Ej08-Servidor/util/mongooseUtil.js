let mongoose = require('mongoose');

//sólo se ejecuta una vez:
mongoose.Promise = global.Promise;

// conectamos con la base de datos
let url = "mongodb://localhost:27017/bbdd";
let promesa = mongoose.connect( url ); // devuelve una promesa
promesa.then( conexion => console.log("ok"))
        .catch( error => console.log (error));


exports.conectar = function() {
    return new Promise(function(resolve, reject){
        mongoose.connect("mongodb://localhost:27017/bbdd") // esto devuelve otra promesa
            .then(conexion => resolve("OK"))
            .catch(error => reject("no se puedo conectar"))
    });   
}