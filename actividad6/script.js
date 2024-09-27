/* Pintar los datos de https://jsonplaceholder.typicode.com/posts utilizando el forOf */

let url = "https://jsonplaceholder.typicode.com/posts"

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        crearCard(data);
    })

let container = document.getElementById('container')

function crearCard(data) {
    for (let posts of data) {
        container.innerHTML += `
                <div class="card">
                  <p>User ID: ${posts.userId}</p>
                  <p>ID: ${posts.id}</p>
                  <p>Title: ${posts.title}</p>
                  <p>${posts.body}</p>
                </div>`;
    }
}