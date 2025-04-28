// busqueda.js

const botonBuscar = document.getElementById('botonBuscar');
const botonLimpiar = document.getElementById('botonLimpiar');
const loading = document.getElementById('loading');
const resultados = document.getElementById('resultados');

function buscarProductos() {
    const nombre = document.getElementById('buscarNombre').value.toLowerCase();
    const categoria = document.getElementById('buscarCategoria').value.toLowerCase();
    const color = document.getElementById('buscarColor').value.toLowerCase();

    // Mostrar loading
    resultados.innerHTML = '';
    loading.style.display = 'block';

    // Simular la búsqueda con una promesa que tarda 2 segundos
    new Promise((resolve) => {
        setTimeout(() => {
            const filtrados = productos.filter(producto => {
                const coincideNombre = producto.nombre.toLowerCase().includes(nombre);
                const coincideCategoria = producto.categoria.toLowerCase().includes(categoria);
                const coincideColor = producto.color.toLowerCase().includes(color);
                return coincideNombre && coincideCategoria && coincideColor;
            });
            resolve(filtrados);
        }, 2000);
    }).then(filtrados => {
        loading.style.display = 'none';
        mostrarResultados(filtrados);
    });
}

function mostrarResultados(productosFiltrados) {
    if (productosFiltrados.length === 0) {
        resultados.innerHTML = '<p>No se encontraron productos.</p>';
        return;
    }

    const tabla = document.createElement('table');
    tabla.classList.add('tabla-resultados');

    // Cabecera de la tabla
    tabla.innerHTML = `
        <thead>
            <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Color</th>
                <th>Tamaño</th>
                <th>Precio</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;

    const tbody = tabla.querySelector('tbody');

    productosFiltrados.forEach(producto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td><img src="../imagenes/${producto.imagen}" alt="${producto.nombre}" width="50"></td>
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td>${producto.color}</td>
            <td>${producto.tamaño}</td>
            <td>$${producto.precio.toLocaleString('es-CO')}</td>
        `;
        tbody.appendChild(fila);
    });

    resultados.appendChild(tabla);
}

// Limpiar filtros
function limpiarFiltros() {
    document.getElementById('buscarNombre').value = '';
    document.getElementById('buscarCategoria').value = '';
    document.getElementById('buscarColor').value = '';
    resultados.innerHTML = '';
}

// Eventos
botonBuscar.addEventListener('click', buscarProductos);
botonLimpiar.addEventListener('click', limpiarFiltros);
