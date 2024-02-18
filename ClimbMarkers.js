//set climb icon
var climbIcon = L.icon({
    iconUrl: '/Images/MountainIcon.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
});

// Import climbs data
var climbscluster = L.markerClusterGroup({
    maxClusterRadius: 40 // Adjust this value as needed
});

var climbsData = L.geoJson(climbsJSON, {
    onEachFeature: function(feature, layer) {
        var popupContent = '<div class="popup-content">' +
            '<h3>' + feature.properties.name + '</h3>';

        // Check if description exists and append to popupContent if so
        if (feature.properties.description) {
            popupContent += '<div class="popup-description">' +
                '<p>' + feature.properties.description + '</p>' +
                '</div>';
        }

        // Check if imageURL exists and append to popupContent if so
        if (feature.properties.image) {
            var image = '/Images/' + feature.properties.image; // Append '/Images/' to imageURL
            popupContent += '<div class="popup-image">' +
                '<img src="' + image + '" style="width: 300px;" alt="Image" />' +
                '</div>';
        }

        popupContent += '</div>';
        
        layer.bindPopup(popupContent);
        
        layer.on('click', function(e) {
            map.flyTo(e.latlng); // Fly to the clicked marker's position
        });
    },
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, {icon: climbIcon});
    }
});

climbsData.addTo(climbscluster);

// Create climbs layer group
var climbs = L.layerGroup([climbscluster]);