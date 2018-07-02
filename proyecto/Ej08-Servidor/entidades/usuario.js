
let mongoose = require('mongoose');
// definimos el esquema
let esquemaUsuario = new mongoose.Schema ( {
    // _id:       ObjectId,
        nombre:    String,
        login:     String,
        password:  String,
        mail:      String,
        direccion: String,
        telefono:  String,
        idioma:    String,
        rol:       String
});

    // obteniendo el modelo:
exports.Usuario = mongoose.model('usuarios', esquemaUsuario);




