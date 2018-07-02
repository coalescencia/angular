let Producto = require('../entidades/producto').Producto;

exports.buscarProductos = function( criterio ){     //recibe un objeto 
   
    return new Promise(function(resolve, reject){
        Producto.find(criterio || {})
            .then(productos => resolve(productos))
            .catch(error => reject ({status: 500, texto: "error 500 desde producto"}))
    });

}
