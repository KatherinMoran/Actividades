fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    crearCard(data)
  });

let container = document.getElementById('tablaUsers')

function crearCard(data) {
  container.innerHTML = '';
  for (let i = 0; i < data.length; i++) {
    container.innerHTML += `
    <tr>
      <th scope="row">${i + 1}</th>
      <td>${data[i].name}</td>
      <td>${data[i].username}</td>
      <td>${data[i].email}</td>
    </tr>`;
  }
}
