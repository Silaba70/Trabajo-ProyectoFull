
function validarFormulario() {
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("PW").value;

    if (nombre === "" || apellido === "" || email === "" || password === "") {
        alert("Por favor completa todos los campos.");
        return false;
    } else {
        // Aquí puedes enviar el formulario
        document.getElementById("form").submit();
    }
}
