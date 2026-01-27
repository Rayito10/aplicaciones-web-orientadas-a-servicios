let latitud
let longitud


if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(
        (respuesta)=>
    {
        latitud = respuesta.coords.latitude
        longitud = respuesta.coords.longitude

        const coordenadas = [latitud,longitud]
        
        var map = L.map('map').setView(coordenadas, 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        let marker = L.marker(coordenadas).addTo(map);

        marker.bindPopup('Mis coordenadas son: '+latitud+','+longitud)
        

        var circle = L.circle(coordenadas, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
        }).addTo(map);

        var polygon = L.polygon([
        [21.133795, -98.396141],
        [21.133764, -98.396045],
        [21.133905, -98.396007],
        [21.133931, -98.396113]
        ]).addTo(map);

    }
    
    ,

    ()=>
    {

    }

    )
}
else
{

}