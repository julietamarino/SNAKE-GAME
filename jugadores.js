// FETCH
var contenido = document.querySelector("#contenido");

function get() {
    fetch ('https://randomuser.me/api/')
    .then (res => res.json())
    .then (data => {
        console.log(data.results['0'])
        contenido.innerHTML = `
        <img src="${data.results['0'].picture.large}"width="200px">
        <p>Nombre: ${data.results['0'].name.first}</p>
        <p>Apellido: ${data.results['0'].name.last}</p>
        <p>Pais: ${data.results['0'].location.country}</p>
        `
    })
}