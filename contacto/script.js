let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let comentario = document.getElementById("comentario")
let btnEnviar = document.getElementById("enviar");
let informacion = [];

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = email.value;
    informacion[3] = telefono.value;
    informacion[4] = comentario.value;

    console.log(`Su nombre es ${informacion[0]} y su apellido es ${informacion[1]}, su email es: ${informacion[2]}, su telefono es: ${informacion[3]},
            su comentario es: ${informacion[4]}`);

    console.log(btnEnviar.className)

    let blob = new Blob([informacion], { type: "text/plain;charset=utf-8" });

    saveAs(blob, "contact.txt");

    console.log(blob)
})

