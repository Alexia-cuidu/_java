function obtenerPalabrasHastaPosicion(texto, posicion) {
    const palabras = texto.split(' ');

    if (posicion > 0 && posicion <= palabras.length) {
        return palabras.slice(0, posicion).join(' ');
    } else {
        return "Posición fuera de rango";
    }
}

// Usando el string proporcionado
const texto = "hola adios chao lluvia";
const historial = [];

// Función para agregar al historial y mostrar el resultado
function agregarAlHistorial(posicion) {
    const resultado = obtenerPalabrasHastaPosicion(texto, posicion);
    historial.push(resultado);
    console.log(historial.join('\n')); // Muestra el historial línea por línea
}

// Ejemplo de uso
agregarAlHistorial(2); // "hola adios"
agregarAlHistorial(3); // "hola adios chao"
agregarAlHistorial(4); 
