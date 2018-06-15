
let usuarios = [];
let contador  = 3;

//Añadimos unas películas
usuarios.push ( { 'id'       : 1,
                  'nombre'   : 'Pepe',
                  'apellido' : 'McTiernan',
                  'login'  : 'pepe',
                  'password' : 1989 } );
usuarios.push ( { 'id'       : 2,
                  'nombre'   : 'Maria',
                  'apellido' : 'Gonzalez',
                  'login'    : 'maria',
                  'password' : 1234 } );
usuarios.push ( { 'id'       : 3,
                   'nombre'   : 'Jacinto',
                   'apellido' : 'Bermejo',
                   'login'    : 'jacinto',
                   'password' : 1111 } );



exports.buscar = function(login, password){

    return new Promise(function(resolve, reject) {
        for(let a=0; a<usuarios.length; a++){
            let usuario = usuarios[a];
             if(usuario.login == login && usuario.password == password){
                resolve(usuario);
                return; // impide que se siga ejecutando el for, ya que resolve sí permite que siga ejecutándose código
             } 
        }
        reject();        
    });

   
}

exports.insertar = function(usuario) {
    return new Promise(function(resolve, reject){        

        if(!usuario.nombre || usuario.nombre.trim()=='' ){
            reject("nombre obligatorio");
            return;  // porque las promesas continuan el código después del reject()
        } 
            usuario.id = ++contador;
            usuarios.push(usuario);
            resolve();
        
    });
       
    
}