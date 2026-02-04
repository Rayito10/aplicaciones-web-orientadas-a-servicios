    // Usamos fetch para hacer la petición HTTP
    fetch('https://dummyjson.com/products')
        .then(respuesta => respuesta.json()) // Convertimos la respuesta cruda a formato JSON
        .then(data => {
            // La API devuelve un objeto con una propiedad 'items' que contiene el array
            const productos = data.products;
           
            console.log("Datos recibidos:", productos); // Debugging en consola
           
            // Llamamos a la función que se encarga de dibujar en pantalla
            mostrarProductos(productos);
        })
        .catch(error => {
            // Buena práctica: Manejar errores por si falla la red o la API
            console.error("Error al cargar los productos:", error);
            alert("Hubo un error al cargar los datos. Revisa la consola.");
        })

//Buscar productos
const buscarProductos = () => {
    const busqueda = document.getElementById("searchbar").value
    // Usamos fetch para hacer la petición HTTP
    fetch('https://dummyjson.com/products/search?q='+busqueda)
        .then(respuesta => respuesta.json()) // Convertimos la respuesta cruda a formato JSON
        .then(data => {
            // La API devuelve un objeto con una propiedad 'items' que contiene el array
            const productos = data.products;
           
            console.log("Datos recibidos:", productos); // Debugging en consola
           
            // Llamamos a la función que se encarga de dibujar en pantalla
            mostrarProductos(productos);
        })
        .catch(error => {
            // Buena práctica: Manejar errores por si falla la red o la API
            console.error("Error al cargar los productos:", error);
            alert("Hubo un error al cargar los datos. Revisa la consola.");
        })
}

//Buscar productos
const abrirProducto = () => {
    // Usamos fetch para hacer la petición HTTP
    fetch('https://dummyjson.com/products/1')
        .then(respuesta => respuesta.json()) // Convertimos la respuesta cruda a formato JSON
        .then(data => {
            // La API devuelve un objeto con una propiedad 'items' que contiene el array
            const productos = data;
           
            console.log("Datos recibidos:", productos); // Debugging en consola
           
            // Llamamos a la función que se encarga de dibujar en pantalla
            mostrarUnProducto(productos);
        })
        .catch(error => {
            // Buena práctica: Manejar errores por si falla la red o la API
            console.error("Error al cargar los productos:", error);
            alert("Hubo un error al cargar los datos. Revisa la consola.");
        })
}



// Función encargada de manipular el DOM
const mostrarProductos = (productos) => {
    // 1. Seleccionamos el contenedor del HTML
    const contenedorProductos = document.getElementById("contenedor-productos");
   
    // 2. Limpiamos el contenedor por si ya tenía contenido previo
    contenedorProductos.innerHTML = "";

    if (!productos) {
        console.error("No se recibieron productos. Revisa la red o el CORS.");
        return;
    }

    // 3. Recorremos cada producto del array
    productos.forEach(producto => {
        // Creamos un elemento DIV nuevo en memoria
        const tarjeta = document.createElement("div");

        tarjeta.onclick = () => {
        window.location.href = `detalle.html?id=${producto.id}`;
        };
       
        // Le añadimos la clase CSS que definimos en el paso 3
        tarjeta.classList.add("practice-card");
       
        // Usamos Template Strings (``) para inyectar el HTML interno con los datos
        tarjeta.innerHTML = `
            <img src="${producto.images[0]}" alt="${producto.title}" width="100%" style="object-fit: contain; height: 300px;">
            <h3 class="practice-title">${producto.title}</h3>
            <p class="practice-description">${producto.description}</p>
            <p><strong>Marca:</strong> ${producto.brand}</p>
            <p><strong>Precio: </strong> ${producto.price}</p>
        `;
       
        // Finalmente, agregamos la tarjeta completa al contenedor principal
        contenedorProductos.appendChild(tarjeta);
    })
}

const mostrarUnProducto = (productos) => {
    const contenedorProductos = document.getElementById("contenedor-productos");
   
    contenedorProductos.innerHTML = "";

    if (!productos) {
        console.error("No se recibieron productos. Revisa la red o el CORS.");
        return;
    }

}