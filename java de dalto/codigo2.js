"use strict";

const addZeros = n => {
    return n.toString().padStart(2, '0');
}

const actualizarHora = () => {
    const time = new Date();
    let hora = addZeros(time.getHours());
    let min = addZeros(time.getMinutes());
    let seg = addZeros(time.getSeconds()); 
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;
}

actualizarHora();
setInterval(actualizarHora, 1000);
