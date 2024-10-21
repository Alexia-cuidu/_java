function invertirPalabra(palabra) {
    return palabra.split('').join('');
}

function obtenerPalabrasHastaPosicion(texto, posicion) {
    const palabras = texto.split(' ');
    const cantidadDePalabras = palabras.length;

    // Función para encontrar la palabra más larga
    const encontrarPalabraMasLarga = (palabras) => {
        return palabras.reduce((masLarga, palabra) => {
            return palabra.length > masLarga.length ? palabra : masLarga;
        }, '');
    };

    // Aseguramos que la posición es válida
    if (posicion > 0 && posicion <= cantidadDePalabras) {
        const palabrasInvertidas = palabras.slice(0, posicion).map(invertirPalabra);
        const palabraMasLarga = encontrarPalabraMasLarga(palabras);
        
        return {
            textoInvertido: palabrasInvertidas.join(' '),
            contador: cantidadDePalabras,
            palabraMasLarga: palabraMasLarga
        };
    } else {
        return {
            mensaje: "Posición fuera de rango",
            contador: cantidadDePalabras,
            palabraMasLarga: encontrarPalabraMasLarga(palabras)
        };
    }
}

// Usando el string proporcionado
const texto = "hola adios chao  javascript lluvia";
const posicion = 4; // Cambia este valor para obtener hasta otras palabras
const resultado = obtenerPalabrasHastaPosicion(texto, posicion);

console.log(resultado.textoInvertido || resultado.mensaje); // Muestra el texto invertido o un mensaje de error
console.log("Cantidad de palabras:", resultado.contador); // Muestra la cantidad de palabras
console.log("Palabra más larga:", resultado.palabraMasLarga); // Muestra la palabra más larga
