"use strict";
const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover", e => {
    e.preventDefault();
    changeStyle(zona, "#444");  // Cambiado a 'zona'
});

zona.addEventListener("dragleave", e => {
    e.preventDefault();
    changeStyle(zona, "#888");  // Cambiado a 'zona'
});

zona.addEventListener("drop", e => {
    e.preventDefault();
    changeStyle(zona, "#888");  // Cambiado a 'zona'
    if (e.dataTransfer.files.length > 0) {
        cargarArchivo(e.dataTransfer.files[0]);
    }
});

const changeStyle = (obj, color) => {
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
};

const cargarArchivo = ar => {
    const reader = new FileReader();
    reader.readAsDataURL(ar);
    reader.addEventListener("load", e => {
        const url = e.target.result; 
        let video = document.createElement("VIDEO");
        video.setAttribute("src", url);
        video.setAttribute("controls", "");
        document.querySelector(".resultado").appendChild(video);
        video.play();
    });
};
