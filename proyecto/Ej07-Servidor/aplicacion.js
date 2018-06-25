let express = require('express');
let bodyParser = require('body-parser');
let usuarioRest = require('./rest-apis/usuariosRest');
let mongoDBUtil = require('./util/mongoDBUtil.js');
let authUtil = require('./util/autenticacionUtil');
let atob = require('atob');


mongoDBUtil.conectar();

let app = express();


app.disable('x-powered-by');
//Para el cross origin:
//Incluye configuración para BASIC AUTHENTICATION
// Interceptores:
app.use(function( request, response, next){
    console.log("Petición recibida:"+request.path);
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

    console.log("METODO:" + request.method);
    if(request.method == "OPTIONS") {
        next();
        return;
    }

    authUtil.basicAuthentication(request, response)
        .then(usuario => {
            request.usuario = usuario;  // guardamos el usuario en el request para poder seguir utilizándolo en la aplicación
            next();
        }) 
        .catch( error => {
            response.sendStatus(403);
        });    
});

app.use(bodyParser.json());
app.use('/', usuarioRest.router);

app.listen(8000,function() {
    console.log("esperando peticiones...");
});
