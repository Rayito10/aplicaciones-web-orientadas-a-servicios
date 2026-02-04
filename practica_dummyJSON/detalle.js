const params = new URLSearchParams(window.location.search);
const productoId = params.get('id');

const cargarDetalle = async () => {
    if (!productoId) return;

    try {
        const respuesta = await fetch(`https://dummyjson.com/products/${productoId}`);
        const producto = await respuesta.json();

        mostrarProducto(producto);
    } catch (error) {
        console.error("Error al obtener el producto:", error);
    }
};

const mostrarProducto = (producto) => {
    
    const contenedor = document.getElementById("detalle-producto");
    
    contenedor.innerHTML = `
        <h1>${producto.title}</h1>
        <img src="${producto.images[0]}" alt="${producto.title}">
        <p><strong>Descripción:</strong> ${producto.description}</p>
        <p><strong>Stock:</strong> ${producto.stock} unidades</p>
        <h2>Precio: $${producto.price}</h2>
        <button onclick="window.history.back()">Volver</button>
    `;
};

cargarDetalle();