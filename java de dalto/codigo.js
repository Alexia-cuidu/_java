class Objeto{
    constructor(){};
    hablar(){
        console.log("hola")
    }
}
const objeto = new Objeto();

objeto.__proto__.hablar = ()=> {
    console.log("fuera");
}

let arr = [];
arr.__proto__ = objeto;
arr.hablar()
