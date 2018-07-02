
let mongoose = require('mongoose');
// definimos el esquema
let esquemaProducto = new mongoose.Schema ( {
       
        codigo:      String,
        nombre:      String,
        descripcion: String,
        precio:      Number,       
        imagen:      String,
        categoria:   String      
});

    // obteniendo el modelo:
exports.Producto = mongoose.model('productos', esquemaProducto);
