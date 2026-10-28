import { renderCatalogo } from "./funciones.js";
import productosMascotas from "./productos.js";

const contenedorProducto = document.getElementById("contenedor-productos");
const dialogoProducto = document.getElementById("dialogo");

//CLASE 19 - EVENTOS

//D: Document
//O: Object
//M: Model

// Muestra la informacion del producto dentro del <dialog>
function mostrarProducto(producto) {
    // Si la pagina no tiene dialogo, no hacemos nada
    if (!dialogoProducto) return;

    dialogoProducto.innerHTML = `
        <h2>${producto.nombre}</h2>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <p>${producto.descripcion}</p>
        <ul>
            <li>Talles: ${producto.talles.join(", ")}</li>
            <li>Precio: $${producto.precio}</li>
        </ul>
        <button class="btn-cerrar-dialogo" type="button" data-nombre="${producto.nombre}">Cerrar</button>
    `;

    // showModal() lo muestra centrado, con fondo oscuro y bloquea el resto
    dialogoProducto.showModal();
}

// Solo renderizamos si la pagina tiene el contenedor (catalogo.html)
if (contenedorProducto) {
    // Mostramos todos los productos
    renderCatalogo(contenedorProducto, productosMascotas);

    // Delegacion de eventos: escuchamos el click en el contenedor,
    // asi funciona con los botones que se crean despues con renderCatalogo.
    contenedorProducto.addEventListener("click", (evento) => {
        const botonEvento = evento.target.closest(".btn-agregar");

        // Si el click no fue en un boton "Añadir al carro", no hacemos nada
        if (!botonEvento) return;

        // Buscamos a que producto pertenece la tarjeta clickeada
        const tarjeta = botonEvento.closest(".tarjeta-producto");
        const producto = productosMascotas[Number(tarjeta.dataset.indice)];

        console.log("Evento:", evento);
        console.log("Producto:", producto.nombre);

        mostrarProducto(producto);
    });
}

// Cerrar el dialogo con el boton "Cerrar" o haciendo click fuera de el
if (dialogoProducto) {
    dialogoProducto.addEventListener("click", (evento) => {
        const clickEnBotonCerrar = evento.target.closest(".btn-cerrar-dialogo");
        const clickFueraDelContenido = evento.target === dialogoProducto;

        if (clickEnBotonCerrar || clickFueraDelContenido) {
            dialogoProducto.close();
        }
    });
}




//Primero renderizar para encontrar los botones

//Luego escuchar los botones

console.log(botonEvento)