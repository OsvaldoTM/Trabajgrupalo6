function validarFormulario() {
    var nombreUsuario = document.getElementById("username").value;
    var correo = document.getElementById("email").value;
    var mensaje = document.getElementById("message").value;
  
    var camposVacios = [];
  
    if (nombreUsuario == "") {
      camposVacios.push("Nombre de usuario");
    }
  
    if (correo == "") {
      camposVacios.push("Correo");
    }
  
    if (mensaje == "") {
      camposVacios.push("Mensaje");
    }
  
    if (camposVacios.length > 0) {
      alert("Los siguientes campos están vacíos: " + camposVacios.join(", "));
      return false;
    }
  
    return true;
  }
  