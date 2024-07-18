"use strict";

let productos = ["Azucar Ledesma", "Cafe Dolca", "CocaCola","Fernet Branca", "Fideos Matarazzo", "Leche laSerenisima", "Mermelada LaCampagnola", "Queso untable", "Yerba playadito", "Yogur laSerenisima"];
let precioProductos = [2000, 5000, 3500, 10000, 1500, 1300, 1300, 3000, 3000, 1000];
let cantidadProductos = [80, 23, 55, 16, 0, 62, 43, 38, 19, 4];
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
    precioProducto.textContent = precioProducto[i]

    let stock = document.createElement("p")
    stock.textContent = `El stock es de ${cantidadProductos[i]} unidades`

    let botonComprar = document.createElement("a")
    botonComprar.textContent = "Realizar compra"
    botonComprar.href = "../compra/index.html"


    card.appendChild(tituloProducto);
    card.appendChild(imagen)
    card.appendChild(precioProducto);
    card.appendChild(stock);
    card.appendChild(botonComprar)

    contenedor.appendChild(card)
}