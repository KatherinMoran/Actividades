// operadores ternarios
// Cuando no tenga foto, utilizar un ternario para mostrar una imagen por defecto."
// "ternario" porque esta compuesto por tres partes, es como hacer un if en una sola linea
// let edad = 10;
// edad >= 18 ? "es mayor de edad" : "es menor de edad";
// name, img, house
let url = "https://hp-api.onrender.com/api/characters"
let imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/HP_-_Harry_Potter_wordmark.svg/640px-HP_-_Harry_Potter_wordmark.svg.png"
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        crearCard(data)
    })

let container = document.getElementById('container')

function crearCard(data) {
    for (let i = 0; i < data.length; i++) {
        container.innerHTML += `
            <div class="card">
              <p>${data[i].name}</p>
              <img src="${data[i].image ? data[i].image : imagen }" alt="">
              <p>${data[i].house}</p>
            </div>`;
    }
}

