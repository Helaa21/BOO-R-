document.addEventListener("DOMContentLoaded", () => {
    
    // Definición de Productos de ejemplo
    const productos = [
        { id: 1, nombre: "Silla ZEN", precio: 85.00, imagen: "silla-zen.jpg", descripcion: "Minimalista y ergonómica." },
        { id: 2, nombre: "Estante ECO", precio: 120.00, imagen: "estante-eco.jpg", descripcion: "Diseño modular de 3 niveles." },
        { id: 3, nombre: "Lámpara RÚ", precio: 45.00, imagen: "lampara-ru.jpg", descripcion: "Luz suave, ambiente cálido." },
    ];

    // Obtener elementos del DOM
    const carritoIcono = document.getElementById("carrito-icono");
    const carritoSidebar = document.getElementById("carrito-sidebar");
    const cerrarCarritoBtn = document.getElementById("cerrar-carrito-btn");
    const contenedorProductos = document.getElementById("contenedor-productos");

    // Función para alternar el carrito
    function toggleCarrito() {
        if (carritoSidebar) {
            carritoSidebar.classList.toggle("activo");
        }
    }

    // Función de ejemplo para agregar al carrito
    function agregarAlCarrito(e) {
        // Verifica si el clic fue en un botón con la clase "agregar-btn"
        if (e.target.classList.contains("agregar-btn")) {
            const idProducto = parseInt(e.target.dataset.id);
            const productoSeleccionado = productos.find(p => p.id === idProducto);
            
            console.log("Producto añadido:", productoSeleccionado.nombre);
            
            // Simulación: Abre el carrito
            toggleCarrito(); 
        }
    }

    // Event Listeners
    if (carritoIcono) {
        carritoIcono.addEventListener('click', toggleCarrito);
    }
    if (cerrarCarritoBtn) {
        cerrarCarritoBtn.addEventListener('click', toggleCarrito);
    }
    if (contenedorProductos) {
        contenedorProductos.addEventListener('click', agregarAlCarrito);
    }
});
