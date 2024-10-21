"strict mode";
const validarEdad = (msg)=>{
    let edad;
    try{
    if(msg) edad = prompt(msg);
    else edad = prompt("introduce tu edad");
    edad = parseInt(edad);
    if(isNaN(edad)) throw "introduce tu edad";
    if(edad>18) console.log("mayor de edad");
    else console.log("menor");
}catch(e){
    validarEdad(e)
}
}
validarEdad()