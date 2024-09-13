fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results)
    let datos = data.results
    crearCard(datos)
  })

let container = document.getElementById('container')

function crearCard(data) {
  for (let i = 0; i < data.length; i++) {
    container.innerHTML += `
        <div class="card">
          <p class="nombre">${data[i].name}</p>
          <p class="link">${data[i].url}</p>
        </div>`;
  }
}
