function validarFormulario() {
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const clave = document.getElementById("clave");
  const confirmarClave = document.getElementById("confirmarClave");

  const errorNombre = document.getElementById("errorNombre");
  const errorEmail = document.getElementById("errorEmail");
  const errorClave = document.getElementById("errorClave");
  const errorConfirmarClave = document.getElementById("errorConfirmarClave");

  let valido = true;

  if (!nombre.checkValidity()) {
    errorNombre.textContent = "Nombre inválido";
      errorNombre.style.color="red"; 
    const img = document.createElement("img");
      img.src = "images/error-icon.svg";
      errorNombre.appendChild(img);  
    valido = false;
  } else {
    errorNombre.textContent = "Campo Correcto";
       errorNombre.style.color="green";  
      const img = document.createElement("img");
       img.src = "images/success-icon.svg";
       errorNombre.appendChild(img);
  }
  

  if (!email.checkValidity()) {
    errorEmail.textContent = "Email inválido";
      errorEmail.style.color = "red";
      const img = document.createElement("img");
      img.src = "images/error-icon.svg";
      errorEmail.appendChild(img);
      valido = false;
  } else {
    errorEmail.textContent = "Campo Correcto";
      errorEmail.style.color = "green";
       const img = document.createElement("img");
       img.src = "images/success-icon.svg";
       errorEmail.appendChild(img);
  }

  if (clave.value.length < 8) {
    errorClave.textContent = "No debe tener más de 8 caracteres";
      errorClave.style.color = "red";
      const img = document.createElement("img");
      img.src = "images/error-icon.svg";
      errorClave.appendChild(img);
    valido = false;
  } else {
    errorClave.textContent = "Campo Correcto";
      errorClave.style.color = "green";
      const img = document.createElement("img");
       img.src = "images/success-icon.svg";
       errorClave.appendChild(img);
  }

  if (confirmarClave.value !== clave.value) {
    errorConfirmarClave.textContent = "Las contraseñas no coinciden";
      errorConfirmarClave.style.color = "red"; 
      const img = document.createElement("img");
      img.src = "images/error-icon.svg";
      errorConfirmarClave.appendChild(img);
    valido = false;
  } else {
    errorConfirmarClave.textContent = "Campo Correcto";
      errorConfirmarClave.style.color = "green"; 
       const img = document.createElement("img");
       img.src = "images/success-icon.svg";
       errorConfirmarClave.appendChild(img);
  }

  if (valido) {
    alert("Inscripción correcta");
  }

  return valido;
}