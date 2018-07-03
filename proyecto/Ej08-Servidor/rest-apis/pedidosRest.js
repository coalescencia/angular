let express = require ('express');
let bodyParser = require('body-parser');
let negocioPedidos = require('../negocio/pedidosNegocio.js');

let router = express.Router()



router.use(bodyParser.json());

router.get("/pedidos/usuarios/:id", listarPedidosUsuario);
router.post('/pedidos', insertarPedido);


exports.router = router;



///////////// Funciones con la lógica de control ////////////////////
function listarPedidosUsuario(request, response) {
    let id = request.params.id;

    negocioPedidos.listarPedidosUsuario(id, request.usuario)
        .then( pedidos => response.json(pedidos))
        .catch( error => {
            response.status(error.status);
            response.json(error)
        })

}


function insertarPedido(request, response) {
    let pedido = request.body;
    negocioPedidos.insertarPedido(pedido, request.usuario)
        .then( resultado =>  response.sendStatus(200))        
        .catch(error => {
                response.status(error.status);
                response.json(error);
        });
}


