function Mostrar(){
  let url = "https://pokeapi.co/api/v2/pokemon/";

  fetch(url)
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
            <a href="${data[i].url}">${data[i].url}</a>
          </div>`;
    }
  }

}
document.getElementById('btn').addEventListener("click", function(){
  this.style.display = "none";
});
