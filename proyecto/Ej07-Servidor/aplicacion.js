let express = require('express');
let usuarioRest = require('./rest-apis/usuariosRest');

let app = express();


app.disable('x-powered-by');
//Para el cross origin:
//Incluye configuración para BASIC AUTHENTICATION
app.use(function( request, response, next){
    console.log("Petición recibida:"+request.path);
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    next(); //tira, arrea palante
});


app.use('/', usuarioRest.router);

app.listen(8000,function() {
    console.log("esperando peticiones...");
});
