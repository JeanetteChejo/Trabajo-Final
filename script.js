// /Trabajo Final/script.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        let isValid = true;

        // Validar el nombre
        const nombre = document.getElementById("nombre");
        const errorNombre = document.getElementById("errorNombre");
        if (nombre.value.length < 4) {
            errorNombre.textContent = "El nombre debe tener al menos 4 letras.";
            isValid = false;
        } else {
            errorNombre.textContent = "";
        }

        // Validar el correo electrónico
        const email = document.getElementById("email");
        const errorEmail = document.getElementById("errorEmail");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            errorEmail.textContent = "Debe ingresar un correo electrónico válido.";
            isValid = false;
        } else {
            errorEmail.textContent = "";
        }

        // Validar el teléfono
        const telefono = document.getElementById("telefono");
        const errorTelefono = document.getElementById("errorTelefono");
        const telefonoRegex = /^\d{11}$/;
        if (!telefonoRegex.test(telefono.value)) {
            errorTelefono.textContent = "El número de teléfono debe tener 11 dígitos.";
            isValid = false;
        } else {
            errorTelefono.textContent = "";
        }

        // Validar producto
        const producto = document.getElementById("producto");
        const errorProducto = document.getElementById("errorProducto");
        if (producto.value === "") {
            errorProducto.textContent = "Debe seleccionar un producto.";
            isValid = false;
        } else {
            errorProducto.textContent = "";
        }

        // Validar género
        const genero = form.elements["genero"];
        const errorGenero = document.getElementById("errorGenero");
        let generoSeleccionado = false;
        for (let i = 0; i < genero.length; i++) {
            if (genero[i].checked) {
                generoSeleccionado = true;
                break;
            }
        }
        if (!generoSeleccionado) {
            errorGenero.textContent = "Debe seleccionar un género.";
            isValid = false;
        } else {
            errorGenero.textContent = "";
        }

        // Validar mensaje
        const mensaje = document.getElementById("mensaje");
        const errorMensaje = document.getElementById("errorMensaje");
        if (mensaje.value.trim() === "") {
            errorMensaje.textContent = "Este campo es obligatorio.";
            isValid = false;
        } else {
            errorMensaje.textContent = "";
        }

        // Prevenir el envío del formulario si alguna validación falla
        if (!isValid) {
            event.preventDefault();
        }
    });
});
