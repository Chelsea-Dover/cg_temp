/* google maps */

google.maps.visualRefresh = true;

var map;
function initialize() {
    var geocoder = new google.maps.Geocoder();
    var address = '2626 SW Corbet Ave, Portland, Oregon';
    var mapOptions = {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{"featureType": "water", "stylers": [{"color": "#19a0d8"}]}, {
            "featureType": "administrative",
            "elementType": "labels.text.stroke",
            "stylers": [{"color": "#ffffff"}, {"weight": 6}]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#e85113"}]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#efe9e4"}, {"lightness": -40}]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#efe9e4"}, {"lightness": -20}]
        }, {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [{"lightness": 100}]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{"lightness": -100}]
        }, {"featureType": "road.highway", "elementType": "labels.icon"}, {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "landscape",
            "stylers": [{"lightness": 20}, {"color": "#efe9e4"}]
        }, {"featureType": "landscape.man_made", "stylers": [{"visibility": "off"}]}, {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [{"lightness": 100}]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{"lightness": -100}]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{"hue": "#11ff00"}]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [{"lightness": 100}]
        }, {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [{"hue": "#4cff00"}, {"saturation": 58}]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{"visibility": "on"}, {"color": "#f0e4d3"}]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#efe9e4"}, {"lightness": -25}]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#efe9e4"}, {"lightness": -10}]
        }, {"featureType": "poi", "elementType": "labels", "stylers": [{"visibility": "simplified"}]}]
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    if (geocoder) {
        geocoder.geocode({'address': address}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                    map.setCenter(results[0].geometry.location);

                    var marker = new google.maps.Marker({
                        position: results[0].geometry.location,
                        map: map,
                        title: address
                    });

                } else {
                    alert("No results found");
                }
            }
        });
    }
}
google.maps.event.addDomListener(window, 'load', initialize);

/* end google maps */