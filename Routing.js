//Initialising ORS
const Myapikey = "5b3ce3597851110001cf6248f4b8ded8bdf44b46bcb32ea1d9b1a2c4";


L.Routing.control({
    waypoints: [
        L.latLng(46.2, 6.15),
        L.latLng(45.9, 6.8)
    ]
    // router: new L.Routing.OpenRouteServiceV2("5b3ce3597851110001cf6248f4b8ded8bdf44b46bcb32ea1d9b1a2c4"
    // )
}).addTo(map);
