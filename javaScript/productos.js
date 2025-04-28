// productos.js

let paginaActual = 1;
const productosPorPagina = 15;

// Seleccionamos los elementos
const contenedorProductos = document.getElementById('productos');
const botonAnterior = document.getElementById('anterior');
const botonSiguiente = document.getElementById('siguiente');
const indicadorPagina = document.getElementById('paginaActual');

// Función para renderizar los productos
function mostrarProductos() {
    // Limpiar productos anteriores
    contenedorProductos.innerHTML = '';

    // Calcular inicio y fin
    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;

    // Cortar el array de productos
    const productosPagina = productos.slice(inicio, fin);

   // Crear las tarjetas
productosPagina.forEach(producto => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta-producto');

    tarjeta.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <img src="../imagenes/${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
            </div>
            <div class="card-back">
                <p><strong>Categoría:</strong> ${producto.categoria}</p>
                <p><strong>Precio:</strong> $${producto.precio.toLocaleString('es-CO')}</p>
                <p><strong>Color:</strong> ${producto.color}</p>
                <p><strong>Tamaño:</strong> ${producto.tamaño}</p>
            </div>
        </div>
    `;
    contenedorProductos.appendChild(tarjeta);
});


    // Actualizar indicador de página
    indicadorPagina.textContent = `Página ${paginaActual}`;

    // Habilitar o deshabilitar botones
    botonAnterior.disabled = paginaActual === 1;
    botonSiguiente.disabled = fin >= productos.length;
}

// Eventos para botones
botonAnterior.addEventListener('click', () => {
    if (paginaActual > 1) {
        paginaActual--;
        mostrarProductos();
    }
});

botonSiguiente.addEventListener('click', () => {
    if (paginaActual * productosPorPagina < productos.length) {
        paginaActual++;
        mostrarProductos();
    }
});

// Mostrar productos inicialmente
mostrarProductos();
