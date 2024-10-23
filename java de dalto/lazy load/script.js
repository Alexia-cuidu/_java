"use strict";

const publicaciones = document.querySelector(".publicaciones");
let contador = 0;

const createPublicationCode = (name, content) => {
    const container = document.createElement("DIV");
    const comentarios = document.createElement("DIV");
    const h3 = document.createElement("H3");
    const p = document.createElement("p");
    const btnComentario = document.createElement("INPUT");
    const btnEnviar = document.createElement("INPUT");

    container.classList.add("publicacion");
    comentarios.classList.add("comentarios");
    btnEnviar.classList.add("enviar");
    btnComentario.classList.add("comentario");

    btnComentario.setAttribute("placeholder", "Añade un comentario");
    h3.textContent = name;
    p.textContent = content;

    comentarios.appendChild(btnComentario);
    comentarios.appendChild(btnEnviar);
    btnEnviar.type = "submit";

    container.appendChild(h3);
    container.appendChild(p);
    container.appendChild(comentarios);

    return container;
}

const cargarPublicaciones = async (num) => {
    const request = await fetch("informacion.txt");
    const content = await request.json();
    const arr = content.content;
    const DocumentFragment = document.createDocumentFragment();

    for (let i = 0; i < num; i++) {
        if (contador < arr.length) {
            const newPublicacion = createPublicationCode(arr[contador].nombre, arr[contador].contenido);
            DocumentFragment.appendChild(newPublicacion);
            contador++;
        } else {
            break;
        }
    }
    publicaciones.appendChild(DocumentFragment);
}

cargarPublicaciones(5);


 
