"use strict";
const archivo = document.getElementById('archivo');
archivo.addEventListener("change",(e)=>{
    leerArchivo(archivo.files[0])
})
const leerArchivo = ar =>{


const reader = new FileReader();
reader.readAsText(ar);
reader.addEventListener("load",(e) =>console.log(e) )
}