function cambiarSigno(valor) {
    // Intentamos convertir el valor a número
    const numero = Number(valor);

    // Verificamos si es un número válido
    if (!isNaN(numero)) {
        // Si es un número válido, cambiamos el signo
        return numero * -1;
    } else {
        // Si no es un número válido, devolvemos el valor original
        return valor;
    }
}

// Ejemplos de uso
console.log(cambiarSigno(5));    // -5
console.log(cambiarSigno(-10));  // 10
console.log(cambiarSigno("abc")); // "abc"
console.log(cambiarSigno(0));    // -0
