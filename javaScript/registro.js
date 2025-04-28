// registro.js

const formulario = document.getElementById('formularioRegistro');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se recargue la página automáticamente

    // Capturar los valores
    const nombre = document.getElementById('nombre').value.trim();
    const categoria = document.getElementById('categoria').value;
    const imagen = document.getElementById('imagen').value;
    const codigo = document.getElementById('codigo').value.trim();
    const precio = parseFloat(document.getElementById('precio').value);
    const color = document.getElementById('color').value.trim();
    const tamaño = document.getElementById('tamaño').value.trim();

    // Validaciones básicas
    if (nombre.length > 20) {
        alert('El nombre no puede tener más de 20 caracteres.');
        return;
    }

    if (!/[a-z]/.test(codigo) || !/[A-Z]/.test(codigo) || !/\d.*\d/.test(codigo) || codigo.length < 8) {
        window.location.href = 'indicaciones.html';
        return;
    }
    
    

    if (isNaN(precio) || precio <= 0) {
        alert('Ingrese un precio válido.');
        return;
    }

    if (!categoria || !imagen || !color || !tamaño) {
        alert('Todos los campos deben estar completos.');
        return;
    }

    // Crear nuevo producto
    const nuevoProducto = {
        nombre,
        categoria,
        imagen,
        codigo,
        precio,
        color,
        tamaño
    };

    // Cargar los productos actuales desde localStorage
    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    // Agregar el nuevo producto al array
    productos.push(nuevoProducto);

    // Guardarlo otra vez en localStorage
    localStorage.setItem('productos', JSON.stringify(productos));

    // Mensaje de éxito
    alert('¡Producto registrado exitosamente!');

    // Redirigir a productos
    window.location.href = 'productos.html'; // O "index.html" si cambiaste
});

