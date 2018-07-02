let express = require ('express');
//let bodyParser = require('body-parser');
let productosNegocio = require('../negocio/productosNegocio');

let router = express.Router()

//router.use(bodyParser.json());
router.get('/productos', listarProductos);
router.get('/productos/categorias/:cat', listarProductosCategoria);

exports.router = router;

///////////// FUNCIONES CON LA LÓGICA DE CONTROL  ////////////////////

function listarProductos(request, response) {
   console.log("listar productos");

    productosNegocio.buscarProductos()
        .then(productos => {
            response.status(200);
            response.json(productos);

        })
        .catch(error => {
            response.status(error.status);
            response.json(error);
        });

  
}

function listarProductosCategoria(request, response) {
    console.log("listar productos categoria");
    let categoria = request.params.cat;
    productosNegocio.buscarProductos({categoria: categoria})
    .then(productos => {
        response.status(200);
        response.json(productos);

    })
    .catch(error => {
        response.status(error.status);
        response.json(error);
    });
    

}

