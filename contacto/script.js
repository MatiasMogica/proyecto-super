let form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let comentario = document.getElementById("comentario");
    let textoNombre = document.getElementById("nombreError");
    let textoApellido = document.getElementById("apellidoError");
    let textoEmail = document.getElementById("emailError");
    let textoTelefono = document.getElementById("telefonoError");
    let textoComentario = document.getElementById("comentarioError");
    let informacion = [];

    textoNombre.textContent = "";
    textoApellido.textContent = "";
    textoEmail.textContent = "";
    textoTelefono.textContent = "";
    textoComentario.textContent = "";

    let nombreValidate = /^[^\d]*$/;
    let emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let telefonoValidate = /^\d{10}$/;

    let valid = true;

    if (!nombreValidate.test(nombre.value) || nombre.value == "") {
        //alert("El nombre es obligatorio");
        textoNombre.textContent = "El nombre es obligatorio";
        valid = false;
    } 
    if (!nombreValidate.test(apellido.value) || apellido.value == "") {
        //alert("El apellido es obligatorio");
        textoApellido.textContent = "El apellido es obligatorio";
        console.log(textoApellido.textContent)
        valid = false;
    } 
    if (!emailValidate.test(email.value)) {
        //alert("Ingrese un correo válido");
        textoEmail.textContent = "Ingrese un correo válido";
        valid = false;
    } 
    if (!telefonoValidate.test(telefono.value)) {
        //alert("Por favor, ingrese un número de teléfono válido de 10 dígitos.");
        textoTelefono.textContent = "Por favor, ingrese un número de teléfono válido de 10 dígitos.";
        valid = false;
    } 
    if (comentario.value === "") {
        //alert("Por favor escriba un comentario");
        textoComentario.textContent = "Por favor, escriba un comentario";
        valid = false;
    }

    if (valid) {
        informacion.push(`Nombre: ${nombre.value}`);
        informacion.push(`Apellido: ${apellido.value}`);
        informacion.push(`Email: ${email.value}`);
        informacion.push(`Teléfono: ${telefono.value}`);
        informacion.push(`Comentario: ${comentario.value}`);

        let blob = new Blob([informacion.join('\n')], { type: "text/plain;charset=utf-8" });

        saveAs(blob, "contact.txt");

        nombre.value = "";
        apellido.value = "";
        email.value = "";
        telefono.value = "";
        comentario.value = "";

        console.log(blob);
    }
});

