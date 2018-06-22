let mongo = require('mongodb');
let mongoDBUtil = require('../util/mongoDBUtil.js');


exports.buscar = function(login, password){

    let promesa = new Promise( function( resolve, reject) {
        let bbdd = mongoDBUtil.getConexion();
        // si no existe, la crea. Devuelve una promesa si no pasamos el callback como segundo parámetro devolvemos una promesa:
        bbdd.collection("usuarios").findOne({'login': login, 'password': password})
            .then( datos => {
                if(datos != null) {
                    resolve(datos)
                } else {
                    reject( { status: 404, texto: 'Credenciales chuchurrias'});
                }
                
            })
            .catch( error => {
                reject( { status: 500, texto: 'Errorazo 500'});
            });            
    });
    return promesa;  
}


exports.insertar = function(usuario) {    

    let promesa = new Promise( function(resolve, reject) {
        if(typeof usuario._id != 'undefined') {
            reject({ status: 400, texto: 'No se puede insertar con _id'});
            return; // return del reject no de la promesa
        } 
        if( !usuario.nombre || usuario.nombre.trim() =='' ||
            !usuario.login || usuario.login.trim() == '' ||
            !usuario.password || usuario.password.trim() =='' ) {            
                reject({ status: 400, texto: 'Credenciales están mal majete'});
                return;
        }      

        let bbdd = mongoDBUtil.getConexion();    
        bbdd.collection("usuarios").insertOne(usuario) //devuelve una promesa:
            .then( resultado => {
                resolve({ status: 200, texto: 'usuario insertado '});
            })
            .catch( error => {
                reject({ status: 500, texto: 'pedazo error 500'});
            });
    });
          
    return promesa;
}


exports.modificar = function(usuario) {
    usuario._id = mongo.ObjectID(usuario._id);
    let bbdd = mongoDBUtil.getConexion();  
    return bbdd.collection("usuarios").updateOne({ _id: usuario._id},{$set: usuario});
}


exports.borrar = function(usuario) {
    let bbdd = mongoDBUtil.getConexion();  
    return bbdd.collection("usuarios").deleteOne({ _id:mongo.ObjectID(usuario._id) });
}


exports.listar = function() {
    let bbdd = mongoDBUtil.getConexion();  
    return bbdd.collection("usuarios").find();
}

exports.buscarPorId = function(id) {
    let bbdd = mongoDBUtil.getConexion();  
    return bbdd.collection("usuarios").findOne({_id: mongo.ObjectID(id)});
}

exports.buscarLoginExiste = function(login) {
    return new Promise( function(resolve, reject ) {
        mongoDBUtil.getConexion().collection("usuarios").findOne({ 'login': login })
            .then( usr => {       // 'then': la consulta ha ido bien haya o no encontrado usuario
                if( usr ) {
                    resolve(usr);
                } else {
                    reject({ status: 404, mensaje: "No existe un usuario con ese login, puedes crearlo majo_a" });
                }
            }) 
            .catch( error => { reject ({ status: 500, mensaje: "Uhhhhh, error de servidor, salgan corriendo" } )}) // la consulta no ha funcionado
    })
}

 
