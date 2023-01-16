// Call the dataTables jQuery plugin
$(document).ready(function() {
  loadUsuarios();
  $('#usuarios').DataTable();
});
async function loadUsuarios(){

const request = await fetch('/users',{
method: 'GET',
header:{
 'accept': 'application/json',
  'Content-Type': 'application/json'
}});

const usuarios = await request.json();
console.log(usuarios);

let listaHTML = '';

for (let usuario of usuarios){

let botonEliminar = '<a href="#" onclick = "eliminarUsuario(' + usuario.id + ')" class="btn btn-danger btn-circle btn-sm"> <i class="fas fa-trash"></i> </a>';

let usuarioHTML = '<tr> <td>'+usuario.id+'</td> <td>'
+usuario.username+'</td><td>'
+usuario.lastname+'</td> <td>'
+usuario.email+'</td> <td>'
+usuario.phonenumber+'</td><td>'
+botonEliminar+'</td></tr>'

listaHTML = listaHTML + usuarioHTML;

}
document.querySelector('#usuarios tbody').outerHTML = listaHTML;

}
async function eliminarUsuario(id) {

  if (!confirm('¿Desea eliminar este usuario?')) {
    return;
  }

 const request = await fetch('users/' + id, {
    method: 'DELETE',
    headers: getHeaders()
  });

  location.reload()
}

