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
router.get('/usuarios/listar/', listarUsuarios);
router.put('/usuarios/:id', modificar);
//router.delete('/usuarios/:id', borrar);
router.get('/usuarios/:id', buscarPorId);
router.get('/logins/:login', comprobarExisteLogin);

exports.router = router;



///////////// Funciones con la lógica de control ////////////////////

let mongo = require('mongodb');

function insertar(request, response) {

    let usuario = request.body;
    negocioUsuarios.insertar(usuario)
    .then( respuesta => {response.json(respuesta)
    })       
    .catch( error => {
        response.status(error.status);
        response.json(error);        
    });
}

function buscarPorLogin(request, response) {

    // al pasar por el interceptor se busca la cabecera authentication en la petición.
    // Se obtiene de la base de datos el usuario y se guarda en el request

    let usuario = request.usuario;
    response.json(usuario);

   /*  let login = request.query.login;
    let password = request.query.password;    
    console.log(login,password);
    // la url sería por ejemplo: http://localhost:8000/usuarios/credenciales?login=3&password=4

    negocioUsuarios.buscar(login, password).
        then(function(usuario) {            
            response.json(usuario);               
        }).
        catch(function(error){
            response.status(error.status);
            response.json(error);
        }); */

}

function listarUsuarios() {
    negocioUsuarios.listar().
        then(function(usuarios) {
            console.log(usuarios);
        }).
        catch(function(){
            console.log("no es posible listar usuarios porque no existen");
        });
}

function buscarPorId(request, response) {
     let id = request.params.id;   
    negocioUsuarios.buscarPorId(id).
        then(function(usuario) {
            response.json(usuario);        
        }).
        catch(function(error){
            console.log(error);
        })

    }

    function modificar(request, response) {
        let id = request.params.id;
        let usuarioBody = request.body;
        usuarioBody._id = id; // por si acaso no tiene el usuario id me aseguro de ponérselo

        negocioUsuarios.modificar(usuarioBody, request.usuario).
        // comprobamos cogiendo usuarioBody y request.usuario que el usuario que viene en el body es el mismo que manda las credenciales. Es por seguridad, para evitar cambio alguien en la url
            then(function() {
                response.sendStatus(200);
            })
            .catch(error => {
                console.log(error);
                response.status(error.status);
                response.json(error);
            });
    }

    function comprobarExisteLogin(request, response) {
        let login = request.params.login;
        negocioUsuarios.buscarLoginExiste(login).
            then(function(usuario) {
                response.send( { "login": usuario.login})
            }).
            catch(function(error) {
                response.status(error.status);
                response.json(error);
            });
    }



