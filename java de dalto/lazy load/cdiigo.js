"use strict";

if (!('Notification' in window)) {
    console.log("Las notificaciones no están disponibles");
   
    Notification.requestPermission((permission) => {
        if (permission == "granted") {
            new Notification("¡Holi guapi!");
        }
    });
}
