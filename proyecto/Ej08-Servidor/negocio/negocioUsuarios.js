let mongo = require('mongodb');
let Usuario = require('../entidades/usuario').Usuario;

exports.buscar = function(login, password){
    
    let promesa = new Promise( function( resolve, reject) {

        Usuario.findOne({'login': login, 'password': password})   // si no existe, la crea. Devuelve una promesa si no pasamos el callback como segundo parámetro devolvemos una promesa:  
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


// el objeto 'usuario' que nos envían sale directamente del json recibido en el servicio rest:
exports.insertar = function(usuario) {    
    /* let usuarioMongoose = new Usuario(usuario);
    usuarioMongoose.save(); */
    
    if(typeof usuario._id != 'undefined') {
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
    }    
    
    usuario = new Usuario(usuario); // sólo creo el objeto de mongoose si ha pasado los if
    
    return new Promise(function(resolve, reject) {
        usuario.save() //devuelve una promesa
            .then( rs => resolve({ status: 200, texto: 'usuario insertado '}) )
            .catch( error => {
                reject({ status: 500, texto: 'pedazo error 500'});
             })
     });
}


exports.modificar = function(usuarioAModificar, usuarioQueModifica) {
    // ver comentarios en usuariosRest por qué recibimos los dos parámetros


    
    // autorización. Sólo el usuario y el administrador pueden modificar los datos. Falta el rol
    if(usuarioAModificar._id != usuarioQueModifica._id) {
        return new Promise( function(resolve, reject){
            reject( {status: 403, texto: 'No tiene permisos'})
        });
    }

    // validación
    if( !usuarioAModificar.nombre || usuarioAModificar.nombre.trim() =='' ||
        !usuarioAModificar.login || usuarioAModificar.login.trim() == '' ||
        !usuarioAModificar.password || usuarioAModificar.password.trim() =='' ) {            
            return new Promise( function(resolve, reject){
                reject({ status: 400, texto: 'Que te he dicho que datos incorrectos'});
            });
    }   
    
    // 1ª opción: con Mongoose:

    return new Promise(function(resolve, reject) {
        Usuario.findByIdAndUpdate( usuarioAModificar._id, usuarioAModificar)
            .then(rs => resolve(rs))
            .catch( error => reject( { status: 500, texto: 'Problema de servidor'}));
    })

   // 2ª opción: con el driver de mongo:
   /*  usuarioAModificar._id = mongo.ObjectID(usuarioAModificar._id);

    return new Promise( function(resolve, reject) {
        let bbdd = mongoDBUtil.getConexion();  
        bbdd.collection("usuarios")
            .updateOne({ _id: usuarioAModificar._id},{$set: usuarioAModificar })
        .then( resultado => resolve (resultado))
        .catch( error => reject({ status: 500, texto: 'Problema de servidor'}));

    }) */
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

 
