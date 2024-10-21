let palabras = ["hola", "adios", "chao", "lluvia"];


let palabrasConPrimeraMayuscula = palabras.map(palabra => 
  palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
);

console.log(palabrasConPrimeraMayuscula);
