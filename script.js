// FORMULARIO
const formulario = document.getElementById("formulario");
let nombreStorage = localStorage.getItem("nombreUsuario");
let edadStorage = localStorage.getItem("edadUsuario");
const contFormulario = document.getElementById("contFormulario");
const saludoUsuario = document.getElementById("saludoUsuario");
const play = document.getElementById("play");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("nombreUsuario", formulario.children[0].value);
    localStorage.setItem("edadUsuario", formulario.children[1].value);
    nombreStorage = formulario.children[0].value;
    verificarFormulario();
});

const verificarFormulario = () => {
    console.log(nombreStorage);
    if (nombreStorage && nombreStorage !== "null") {
        console.log ("La información ya existe");
        contFormulario.remove();
        saludoUsuario.innerHTML = `hola ${nombreStorage}, pulsa PLAY para empezar a jugar`;
        const play = document.createElement('form');
    play.action = "juego.html";
    play.innerHTML = `
        <button id="play"> PLAY </button>`;
    document.body.appendChild(play);
    } else {
        console.log ("La información no existe");
    }
}

verificarFormulario();
