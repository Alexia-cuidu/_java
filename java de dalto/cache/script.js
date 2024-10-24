const newFechaUTC = (dias) => {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias * 1000 * 60 * 60 * 24);
    return fechaUTC = fecha.toUTCString();

};

const crearCookies = (name, value, dias) => {
    const expires = newFechaUTC(dias);
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

crearCookies("usuario = alexia", 4);
