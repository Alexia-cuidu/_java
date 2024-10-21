
function crearUsuario(){
    return{
        email,
        name,
        activo: true,
        recuperarClave: function(){
            console.log('recuperando clave');
        },
    };
}
let user1 = crearUsuario('nicolas','nico@hola.io');
let user2 = crearUsuario('felipe','felipe@hola.io');
console.log(user1, user2);