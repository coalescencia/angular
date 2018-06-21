let mongo = require('mongodb');

let url = "mongodb://localhost:27017";
let esquema = "bbdd";
let conexion = null;

exports.conectar = function() {
    mongo.connect(url) // devuelvo una promesa para que 'alguien' se apunte a ella con el 'then'
        .then( bd => conexion=bd);
}

exports.getConexion = function() {
    return conexion.db(esquema);
    // hay retornar la conexión en esta función porque 'conectar()' no puede retornar la conexión ya que el return no pertenece a la función 'conectar' sino al then
}