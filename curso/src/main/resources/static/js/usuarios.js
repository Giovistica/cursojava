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

const users = await request.json();


console.log(users,"users");

let listaHTML = '';

for (let user of users){

let botonEliminar = '<a href="#" onclick = "eliminarUsuario(' + user.id + ')" class="btn btn-danger btn-circle btn-sm"> <i class="fas fa-trash"></i> </a>';

let usuarioHTML = '<tr> <td>'+user.id+'</td> <td>'
+user.username+'</td><td>'
+user.lastname+'</td> <td>'
+user.email+'</td> <td>'
+user.phonenumber+'</td><td>'
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
    headers: {
              'accept': 'application/json',
              'Content-Type': 'application/json'
             }
  });

  location.reload()
}

