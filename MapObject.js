//Add tile layers
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


//set map bounds
var southWest = L.latLng(-89.98155760646617, -250),
northEast = L.latLng(89.99346179538875, 250);
var bounds = L.latLngBounds(southWest, northEast);


//initialise map
var map = L.map('map', {
    center: [50.4, 8.8],
    zoom: 6,
    layers: [CartoDB_Voyager], //layers: [CartoDB_Voyager, climbs]
    
});


//Set Boundaries
map.setMaxBounds(bounds);
map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false }); //set map boundaries
});
map.options.minZoom = 2; //set min zoom



//layer control
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
