"use strict";

let productos = ["Azucar Ledesma", "Cafe Dolca", "CocaCola", "Fernet Branca", "Fideos Matarazzo", "Leche laSerenisima", "Mermelada LaCampagnola", "Queso untable", "Yerba playadito", "Yogur laSerenisima"];
let precioProductos = [2000, 5000, 3500, 10000, 1500, 1300, 1300, 3000, 3000, 1000];
let cantidadProductos = [80, 23, 55, 16, 14, 62, 43, 38, 19, 4];
let imagenProducto = ["../imagenes/azucar.jpeg", "../imagenes/cafe.jpeg", "../imagenes/cocacola.jpeg", "../imagenes/fernet.jpeg", "../imagenes/fideos.jpeg", "../imagenes/leche.jpeg", "../imagenes/mermelada.jpeg", "../imagenes/quesoUntable.jpeg", "../imagenes/yerba.jpeg", "../imagenes/yogur.jpeg"]

let contenedor = document.getElementById("contenedor-producto");

for (let i = 0; i < productos.length; i++) {
    let card = document.createElement("div")
    card.className = "card"

    let tituloProducto = document.createElement("h3")
    tituloProducto.textContent = productos[i]

    let imagen = document.createElement("img")
    imagen.src = imagenProducto[i]
    imagen.alt = productos[i]

    let precioProducto = document.createElement("p")
    precioProducto.textContent = `$${precioProductos[i]}`

    let stock = document.createElement("p")
    stock.textContent = `El stock es de ${cantidadProductos[i]} unidades`

    let botonComprar = document.createElement("button")
    botonComprar.textContent = "Realizar compra"
    botonComprar.className = "hero__cta"
    botonComprar.id = `compra${[i]}`


    card.appendChild(tituloProducto);
    card.appendChild(imagen)
    card.appendChild(precioProducto);
    card.appendChild(stock);
    card.appendChild(botonComprar)

    contenedor.appendChild(card)

    let openModal = document.querySelector(`#compra${[i]}`)
    let modal = document.querySelector('.modal');
    let closeModal = document.querySelector('.modal__close');
    let modalImg = document.getElementsByClassName("modal__img")
    let modalInput = document.querySelector("#input1")
    let modalNombre = document.getElementsByClassName("modal__title")
    let modalComprar = document.getElementsByClassName("modal__comprar")
    let modalValidate = document.getElementsByClassName("modal__validate")

    openModal.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(modalImg[0].src);

        modal.classList.add('modal--show');

        modalImg[0].src = imagenProducto[i]
        modalImg[0].alt = productos[i]

        modalNombre[0].textContent = productos[i]

        modalComprar[0].addEventListener("click", (e) => {
            e.preventDefault();
            console.log("comprado")
            let cantInput = Number(modalInput.value)

            if (cantInput > 0 && cantInput <= cantidadProductos[i]) {
                console.log("compra realizada con exito")
                let precio = cantInput*precioProductos[i]
                console.log(precio, cantInput, precioProductos[i])
                modalValidate[0].textContent = `Su compra ha sido realizada por la cantidad de ${"$",precio}, muchas gracias!`
                setTimeout(() => {
                    modal.classList.remove('modal--show');
                }, 3000);
                modalInput.value = 0

            } else {
                console.log("tiene que ingresar un numero entre 0 y la cant")
                console.log(modalValidate);
                modalValidate[0].textContent = `Por favor ingrese un número valido, que se encuentre entre 0 y ${cantidadProductos[i]}`
            }


        })


    });

    closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('modal--show');
    });
}

