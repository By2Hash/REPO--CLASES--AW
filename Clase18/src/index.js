import { renderCatalogo, filtrarPorTalle } from "./funciones.js";
import productosMascotas from "./productos.js";

const contenedorProducto = document.getElementById("contenedor-productos");

// 1. Filtramos la lista de productos por el talle deseado
const productosFiltrados = filtrarPorTalle(productosMascotas, "M");

// 2. Renderizamos únicamente los productos filtrados
renderCatalogo(contenedorProducto, productosFiltrados);