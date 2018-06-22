let atob = require('atob');
let usuariosNegocio = require('../negocio/negocioUsuarios');

exports.basicAuthentication = function(request, response) {

     /* la aplicación angular la primera vez que intenta conectarse con el servicio rest lo que hace el navegador es un "preflight"
    para 'preguntar' al servidor si acepta peticiones desde origenes distintos, si lo acepta ya manda una petición con el body y el authorization.
    Por tanto, en el preflight el navegador envía la consulta sin el body sólo las opciones (OPTIONS), si es admitida, envía ya toda la información
*/
    
    let authorization = request.headers.authorization;
    console.log("Authorization"+authorization);

    if(!authorization) {
        response.sendStatus(403);
        return new Promise(function(resolve, reject){
            reject();
        });
    }

    let base64 = authorization.split(" ")[1];  // viene una cosa llamada 'basic' espacio algo, por eso ponemos split(" ") para coger lo que viene despúes del espacio
    let decodificado = atob(base64);
    let cachos = decodificado.split(":");
    let login  = cachos[0];
    let pw = cachos[1];
   // console.log("login: "+ login);
   // console.log("password:"+ pw);

    // buscamos si el usuario existe en la base de datos, si existe lo dejamos el request (la petición):

    return usuariosNegocio.buscar(login,pw); // devuelve una promesa   

}