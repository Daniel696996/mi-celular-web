function updateClock() {
    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes().toString().padStart(2, `0`);
    document.getElementById(`clock`).innerText = time;
}
setInterval(updateClock, 1000);
updateClock();

function mostrarFrase() {
    const frases = [
        "Eres un crack del codigo",
        "Eres un genio del desarrollo",
        "sigue asi, vas por buen camino",
        "tu codigo es impresionante",

    ];
    const azar = Math.floor(Math.random() * frases.length);
    document.getElementById(`display-text`).innerText = frases[azar];
}

function irAlInicio() {
    document.getElementById(`display-text`).innerText = "Welcome to my website";
    alert("you returned to the home page");
}

async function abrirCamara() {
    const video = document.getElementById(`video`);
    const display = document.getElementById(`display-text`);

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        video.style.display = `block`;
        display.innerText = "Sonrie";
    } catch (error) {
        console.error("Error al acceder a la camara: ", error);
        display.innerText = "Error permiso denegado";
    }
}
