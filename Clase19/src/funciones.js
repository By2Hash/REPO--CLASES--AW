function renderCatalogo(contenedor, productos) {
    let productosHTML = '';

    productos.forEach((producto, indice) => {
        productosHTML += `
        <article class="tarjeta-producto" data-indice="${indice}">
            <h3>${producto.nombre}</h3>
            <picture>
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </picture>
            <p>${producto.descripcion}</p>
            <ul>
                <li>Talles: ${producto.talles.join(', ')}</li>
                <li>Precio: $${producto.precio}</li>
            </ul>
            <button class="btn-agregar" type="button">Añadir al carro de compras</button>
        </article>
        `;
    });

    contenedor.innerHTML = productosHTML;
}

function filtrarPorTalle(productos, talle) {
    return productos.filter((producto) => {
        return producto.talles.includes(talle.toUpperCase());
    });
}

export { renderCatalogo, filtrarPorTalle };