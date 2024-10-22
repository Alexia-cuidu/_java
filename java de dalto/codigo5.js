"use stritct";
const archivo = document.getElementById('archivo');
archivo.addEventListener("change",(e)=>{
    console.log(archivo.files[0])
})
const reader = new FileReader();
console.log(fetch("texto.txt") )