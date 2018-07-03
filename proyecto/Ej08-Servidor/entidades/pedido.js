
let mongoose = require('mongoose');
let Usuario = require('./usuario.js').Usuario;
let Producto = require('./producto.js').Producto;

let esquemaPedido = new mongoose.Schema ({

     codigo: String,
     fecha: String,
     total: Number,
     direccion: String,
    usuario: Usuario.schema,
    detalles: [{
                cantidad: Number,
                precio: Number,
                producto: Producto.schema
              }]

});

    // obteniendo el modelo:
exports.Pedido = mongoose.model('pedidos', esquemaPedido);