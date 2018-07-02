
let mongoose = require('mongoose');
let Usuario = require('./usuario.js').Usuario;
let Producto = require('./producto.js').Producto;

let esquemaPedido = new mongoose.Schema ({

    public codigo: String,
    public fecha: String,
    public total: Number,
    public direccion: String,
    usuario: Usuario.schema,
    detalles: [{
                cantidad: Number,
                precio: Number,
                producto: Producto.schema
              }]

});

    // obteniendo el modelo:
exports.Pedido = mongoose.model('pedidos', esquemaPedidos);