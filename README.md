# Floristería Rosas del Alba - Proyecto Final Fundamentos Web

## Descripción del Proyecto

Este proyecto consiste en una aplicación web para la gestión de productos de la Floristería Rosas del Alba. 
Permite registrar, visualizar y buscar productos de manera eficiente, mejorando la experiencia del usuario y la gestión del inventario.

## Funcionalidades Principales

*   **Registro de Productos:** Permite agregar nuevos productos al catálogo con detalles como nombre, categoría, imagen, código, precio, color y tamaño.
*   **Visualización de Productos:** Muestra los productos disponibles en un formato de tarjetas con diseño "flip card" para mostrar detalles al pasar el cursor.
*   **Búsqueda de Productos:** Permite buscar productos por nombre, categoría y color, mostrando los resultados en una tabla organizada.
*   **Eliminación de Productos:** Permite eliminar productos del catálogo.
*   **Paginación:** Facilita la navegación a través del catálogo de productos.
*   **Diseño Responsivo:** La aplicación se adapta a diferentes tamaños de pantalla para una experiencia de usuario óptima en dispositivos móviles y de escritorio.

## Tecnologías Utilizadas

*   **HTML5:** Estructura y contenido de las páginas web.
*   **CSS3:** Estilos y diseño visual de la aplicación.
*   **JavaScript:** Interacción y lógica de la aplicación.
*   **LocalStorage:** Almacenamiento de datos en el navegador.

## Estructura del Proyecto

El proyecto se organiza en las siguientes carpetas:

Floristeria Rosas del Alba
├── html/
│   ├── index.html         # Página principal (vista de productos)
│   ├── registro.html      # Página para registrar nuevos productos
│   ├── busqueda.html      # Página para buscar productos
│   └── indicaciones.html  # Página con indicaciones para registrar productos
│
├── estilos/
│   └── styles.css         # Estilos generales del proyecto
│
├── javaScript/
│   ├── productos.js       # Lógica para la vista de productos (mostrar, eliminar, paginar)
│   └── data.js            # (Opcional) Datos iniciales de los productos
│
└── imagenes/              # Imágenes utilizadas en el proyecto
    ├── [imagenes de productos]
    └── [otros assets]
    
## Estilos del Proyecto

El proyecto utiliza una paleta de colores y estilos personalizados para crear una experiencia visual atractiva y consistente. 
Los estilos principales se definen en el archivo `estilos/styles.css` e incluyen:

*   **Fuente:** Arial, sans-serif
*   **Colores:**
    *   Fondo general: `#f3f4f6` (un gris claro)
    *   Header:
        *   Fondo: `#8ecae6` (un celeste)
        *   Texto: `#023047` (un azul oscuro)
    *   Botones:
        *   Fondo: `#219ebc` (un celeste más intenso)
        *   Texto: `#ffffff` (blanco)
        *   Hover: `#023047` (azul oscuro)
    *   Botón de eliminar:
        *   Fondo: `#e74c3c` (rojo)
        *   Texto: `#ffffff` (blanco)
        *   Hover: `#c0392b` (rojo más oscuro)
*   **Diseño:**
    *   Contenedor principal (`main`):
        *   Ancho: 100% con un `max-width` en algunas páginas (registro, búsqueda, indicaciones)
        *   Centrado horizontalmente
        *   Fondo blanco
        *   Bordes redondeados
        *   Sombra suave
        *   Flexbox para centrar y alinear elementos
    *   Tarjetas de producto:
        *   Fondo blanco
        *   Bordes
        *   Bordes redondeados
        *   Sombra
        *   Diseño "flip card" con CSS transforms
    *   Paginación:
        *   Centrada horizontalmente
    *   Tabla de resultados:
        *   Bordes en las celdas
        *   Texto centrado

## Páginas del Proyecto

*   `index.html`: Página principal con la vista de productos.
*   `registro.html`: Página para registrar nuevos productos.
*   `busqueda.html`: Página para buscar productos.
*   `indicaciones.html`: Página con indicaciones para registrar productos.

## Configuración e Instalación

1.  Clona el repositorio:

    ```bash
    git clone JoseCastellanos3/proyecto-final-fundamentos-web
    ```

2.  Abre el archivo `index.html` en tu navegador web.

## Uso

*   **Registro de Productos:** Navega a la página `registro.html` y completa el formulario con los detalles del producto.
*   **Visualización de Productos:** Navega a la página `index.html` para ver el catálogo de productos. Utiliza la paginación para navegar entre las páginas.
*   **Búsqueda de Productos:** Navega a la página `busqueda.html` y utiliza los filtros para buscar productos.
*   **Eliminación de Productos:** En la página `index.html`, haz clic en el botón "Eliminar" de la tarjeta del producto que deseas eliminar.

## Créditos

Este proyecto fue desarrollado por Jose Armando Castellanos como proyecto final del curso de Fundamentos Web.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de jcastellanosh03@gmail.com
