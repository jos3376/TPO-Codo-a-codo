function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre.trim() === "" || email.trim() === "" || asunto.trim() === "" || mensaje.trim() === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Validación de formato de correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Ingrese un correo electrónico válido.");
        return false;
    }

    

    return true;}