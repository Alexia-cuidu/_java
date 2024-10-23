"use strict";
const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover", e => {
    e.preventDefault();
    changeStyle(zona, "#444");
});

zona.addEventListener("dragleave", e => {
    e.preventDefault();
    changeStyle(zona, "#888");
});

zona.addEventListener("drop", e => {
    e.preventDefault();
    changeStyle(zona, "#888");
    if (e.dataTransfer.files.length > 0) {
        cargarArchivo(e.dataTransfer.files[0]);
    }
    zona.style.border = "4px solid #888";
});

const changeStyle = (obj, color) => {
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
};

const cargarArchivo = ar => {
    const reader = new FileReader();
    
    reader.readAsArrayBuffer(ar);
    
    reader.addEventListener("progress", e => {
        if (e.lengthComputable) {
            let carga = Math.round((e.loaded / ar.size) * 100);
            console.log(`Cargando: ${carga}%`);
            const barraCarga = document.querySelector(".barra-de-carga");
            barraCarga.style.width = `${carga}%`;
            barraCarga.querySelector(".porcentaje").textContent = `${carga}%`;
        }
    });

    reader.addEventListener("load", e => {
        const videoBlob = new Blob([new Uint8Array(e.target.result)], { type: 'video/mp4' });
        const url = URL.createObjectURL(videoBlob);
        const video = document.createElement("VIDEO");
        video.setAttribute("src", url);
        video.setAttribute("controls", "");
        document.querySelector(".resultado").appendChild(video);
        video.play();
    });
};
