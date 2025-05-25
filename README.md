# Floristería Rosas del Alba - Sistema de Gestión de Productos

## Descripción
Sistema web para la gestión de productos de una floristería, permitiendo el registro, visualización y búsqueda de productos florales. El sistema implementa una interfaz intuitiva con tarjetas giratorias para mostrar los productos y funcionalidades de paginación.

## Funcionalidades

### 1. Visualización de Productos
- Muestra productos en tarjetas giratorias (flip cards)
- Paginación de productos (15 por página)
- Vista frontal con imagen y nombre
- Vista trasera con detalles completos
  - Categoría
  - Precio (formato COP)
  - Color
  - Tamaño

### 2. Registro de Productos
- Formulario validado para nuevos productos
- Campos requeridos:
  - Nombre (máx. 20 caracteres)
  - Categoría predefinida (Rosas, Tulipanes, Orquídeas, etc.)
  - Imagen del producto
  - Código único (mín. 8 caracteres)
  - Precio en COP
  - Color y tamaño

### 3. Búsqueda de Productos
- Filtrado por múltiples criterios
- Resultados en formato de tabla
- Búsqueda por nombre, categoría o color

## Estructura del Proyecto

```
Floristería Rosas del Alba
├── html/
│   ├── productos.html    # Vista principal de productos
│   ├── registro.html     # Formulario de registro
│   ├── busqueda.html     # Sistema de búsqueda
│   └── indicaciones.html # Guía de uso
├── estilos/
│   └── styles.css       # Estilos globales
├── javaScript/
│   ├── productos.js     # Lógica de productos y paginación
│   └── data.js         # Datos de productos
└── imagenes/           # Recursos visuales
```

## Tecnologías Utilizadas
- HTML5
- CSS3 (Flexbox y Grid)
- JavaScript (ES6+)
- LocalStorage para persistencia de datos

## Diseño Visual
- Paleta de colores:
  - Fondo: `#f3f4f6`
  - Header: `#8ecae6`
  - Botones: `#219ebc`
  - Texto: `#023047`
- Diseño responsivo
- Interfaz minimalista y moderna
- Animaciones suaves en tarjetas y botones

## Uso

1. **Ver Productos**
   - Acceder a la página principal
   - Navegar entre páginas con los botones de paginación
   - Pasar el cursor sobre las tarjetas para ver detalles

2. **Registrar Producto**
   - Acceder a "Registrar Producto"
   - Completar el formulario con validaciones
   - Los productos se almacenan en LocalStorage

3. **Buscar Productos**
   - Acceder a "Buscar Producto"
   - Usar los filtros disponibles
   - Los resultados se muestran en tiempo real

## Instrucciones de Implementación

1. Clonar el repositorio
2. Abrir `productos.html` en un navegador web moderno
3. No requiere configuración adicional ni dependencias

## Características Técnicas

- Almacenamiento local con LocalStorage
- Validación de formularios en tiempo real
- Sistema de paginación dinámico
- Interfaz responsiva para diferentes dispositivos

## Notas Importantes
- Los productos se almacenan localmente en el navegador
- Las imágenes deben estar en la carpeta `imagenes/`
- Compatible con los navegadores modernos
- No requiere servidor backend

---
Desarrollado como proyecto final para el curso de Fundamentos Web.
