let express = require ('express');
let bodyParser = require('body-parser');
let negocioUsuarios = require('../negocio/negocioUsuarios.js');

let router = express.Router()



router.use(bodyParser.json());
router.get("/", function(request, response) {
    response.send("<h3>Inicio</h3>");
});
router.get('/usuarios/credenciales/', buscarPorLogin);
router.post('/usuarios', insertar);

exports.router = router;



///////////// Funciones con la lógica de control ////////////////////

function insertar(request, response) {
    let usuario = request.body;
    negocioUsuarios.insertar(usuario)
        .then(() => response.send("usuario insertado"))        
        .catch( mensaje => {
            response.status(400);
            response.send("Error de validación");
        });
}

function buscarPorLogin(request, response) {
    let login = request.query.log;
    let password = request.query.pw;    
    // la url sería por ejemplo: http://localhost:8000/usuarios/credenciales?log=3&pw=4

    negocioUsuarios.buscar(login, password).
        then(function(usuario) {
            response.json(usuario);    
        }).
        catch(function(){
            response.status(404);
            response.send("Credenciales incorrectas");  
        });


    /*  let usuario = negocioUsuarios.buscar(login, password);     
     if(usuario != null){
        response.json(usuario);        
    } else {
        response.status(404);
        response.send("El usuario no existe");        
    }  */
        



}

