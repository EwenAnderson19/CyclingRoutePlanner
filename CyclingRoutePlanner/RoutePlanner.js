//Initialise map
//var map = L.map('map').setView([50.4, 8.8], 5);


//Add tile layer
//check OSM Tile Usage Policy before using this tile in prod

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});


var CartoDB_Voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	ubdomains: 'abcd',
	maxZoom: 20
});



//CartoDB_Voyager.addTo(map)


var myIcon = L.icon({
    iconUrl: '/CyclingRoutePlanner/Images/MountainIcon.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
});

var ColDuVam = L.marker([52.791089, 6.524524], {icon: myIcon}).bindPopup('This is the Col du Vam').openPopup();

var climbs = L.layerGroup([ColDuVam]);

//climbs.addTo(map)


//layer control
var map = L.map('map', {
    center: [50.4, 8.8],
    zoom: 6,
    layers: [osm, climbs]
});

var baseMaps = {
    "OpenStreetMap": osm,
    "CartoDBVoyager": CartoDB_Voyager
};

var overlayMaps = {
    "Climbs": climbs
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

//Adding map click event function
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


//remember to access the console by 'command, option, J'. We can wrte log files to here using console.log()