/*Gmap Init*/

"use strict";

/* Map initialization js*/
if( $('#map_canvas').length > 0 ){	
	 // When the window has finished loading create our google map below
		google.maps.event.addDomListener(window, 'load', init);
	
		function init() {
			var donca = {
				info: '<strong>Welcome to donca</strong>',
				lat: -37.7830,
				long: 145.1660
			};
			var melbo = {
				info: '<strong>Welcome to melbo</strong>',
				lat: -37.8136,
				long: 144.9631
			};

			

			var locations = [
			  [donca.info, donca.lat, donca.long, 0],
			  [melbo.info, melbo.lat, melbo.long, 1],
			  
			];
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions = {
				// How zoomed in you want the map to start at (always required)
				zoom: 11,

				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng(-37.8136, 144.9631), // New York

				// How you would like to style the map. 
				// This is where you would paste any style found on Snazzy Maps.
				styles: [
				{
					"featureType": "administrative",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#444444"
						}
					]
				},
				{
					"featureType": "administrative.locality",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"color": "#f2f2f2"
						},
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"visibility": "simplified"
						},
						{
							"saturation": "-65"
						},
						{
							"lightness": "45"
						},
						{
							"gamma": "1.78"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": 45
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit.line",
					"elementType": "geometry",
					"stylers": [
						{
							"saturation": "-33"
						},
						{
							"lightness": "22"
						},
						{
							"gamma": "2.08"
						}
					]
				},
				{
					"featureType": "transit.station.airport",
					"elementType": "geometry",
					"stylers": [
						{
							"gamma": "2.08"
						},
						{
							"hue": "#ffa200"
						}
					]
				},
				{
					"featureType": "transit.station.airport",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit.station.rail",
					"elementType": "labels.text",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit.station.rail",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "simplified"
						},
						{
							"saturation": "-55"
						},
						{
							"lightness": "-2"
						},
						{
							"gamma": "1.88"
						},
						{
							"hue": "#ffab00"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#bbd9e5"
						},
						{
							"visibility": "simplified"
						}
					]
				}
			]};

			// Get the HTML DOM element that will contain your map 
			// We are using a div with id="map" seen below in the <body>
			var mapElement = document.getElementById('map_canvas');
			
			// Create the Google Map using our element and options defined above
			var map = new google.maps.Map(mapElement, mapOptions);
			var contentString = '<div class="infowindow-wrap">'+
			'<h5 class="infowindow-header">Envato Pvt Ltd</h5>'+
			'<div class="infowindow-body"><p class="txt-dark mb-15">121 King Street, <br>Melbourne VIC 3000, Australia</p><a href="https://envato.com/" target="_blank">www.envato.com</a></div>'+
			'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});	
			var marker, i;
			// Let's also add a marker while we're at it
			for (i = 0; i < locations.length; i++) {
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(locations[i][1], locations[i][2]),
					map: map,
				});

				google.maps.event.addListener(marker, 'click', (function (marker, i) {
					if(i === 2) {
						return false; 
					}
					else
						return function () {
							infowindow.open(map, marker);
						}
				})(marker, i));
				new google.maps.event.trigger( marker, 'click' );
			}
			
					
			
		}
}

