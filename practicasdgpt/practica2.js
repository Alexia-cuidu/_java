function capitalizeFirstLetters(str) {
    return str
        .split(' ') // Divide el string en palabras
        .map(word => 
            word.charAt(0).toUpperCase() + word.slice(1) // Capitaliza la primera letra
        )
        .join(' '); // Une las palabras de nuevo
}

// Ejemplo de uso
const inputString = "hola adios chao lluvia";
const result = capitalizeFirstLetters(inputString);
console.log(result); // "Hola Mundo, Esto Es Una Prueba"
