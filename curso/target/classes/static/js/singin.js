$(document).ready(function() {
   // on ready
});


async function registrarUsuario() {
  let datos = {};
  datos.nombre = document.getElementById('firstName').value;
  datos.apellido = document.getElementById('lastName').value;
  datos.email = document.getElementById('inputEmail').value;
  datos.password = document.getElementById('inputPassword').value;

  let repetirPassword = document.getElementById('repeatPassword').value;

  if (repetirPassword != datos.password) {
    alert('Las contraseñas no coinciden.');
    return;
  }

  const request = await fetch('/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  alert("La cuenta fue creada con exito!");
  //window.location.href = 'login.html'

}