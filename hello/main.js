const collection_docentes= [
    {
        nombre: "Luis Alberto",
        apellidos: "Mendoza San Juan",
        puesto: "Profesor Investigador",
        edad: 41,
        estado: true
    },
    {
        nombre: "Efrén",
        apellidos: "Juárez Castillo",
        puesto: "Profesor Investigador",
        edad: 55,
        estado: false
    },
    {
        nombre: "Hermes",
        apellidos: "Salazar Casanova",
        puesto: "Profesor Investigador",
        edad: 43,
        estado: true
    }
]

const mostrar=()=>{
    //Rescatamos el div que va a contener la información
    const contenedor = document.getElementById("contenedor")
    
    //Limpiamos el contenedor
    contenedor.innerHTML = ""
    
    //Ciclo for que recorre todos los elementos de la colección
    collection_docentes.forEach((docente)=>
    {
        //Si está activo lo carga
        if(docente.estado)
        contenedor.innerHTML += "<div class='tarjeta'>" + "<h2>" + docente.nombre +"</h2>"+"</div>" 
    }) 
}