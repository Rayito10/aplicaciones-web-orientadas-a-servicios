const coordenadas = document.getElementById("parrafo")
const enlace = document.getElementById("enlace")

const obtener = ()=>{
    //Verificamos que el navegador tenga soporte para geolocalización
    if(navigator.geolocation)
    {
        coordenadas.innerText = "Localizando..."
        
        navigator.geolocation.getCurrentPosition(
            position=>{
                const latitud = position.coords.latitude
                const longitud = position.coords.longitude

                coordenadas.innerText = "Latitud: "+latitud+" Longitud: "+longitud
                enlace.href="https://www.google.com/maps?q="+latitud+","+longitud
                enlace.style.display = "block"
                //alert("Longitud: "+longitud+" Latitud: "+latitud)
            },
            ()=>{}
        )

    }
    else
    {
        coordenadas.innerText = "No se pudo obtener la ubicación"
    }
}