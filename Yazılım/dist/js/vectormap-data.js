/*VectorMap Init*/

$(function() {
	"use strict";
	var mapData = {
			"US": 298,
			"SA": 200,
			"AU": 760,
			"IN": 2000000,
			"GB": 120,
		};
	
	if( $('#world_map_marker_1').length > 0 ){
		$('#world_map_marker_1').vectorMap(
		{
			map: 'world_mill_en',
			backgroundColor: 'transparent',
			regionStyle : {
				initial : {
				  fill : '#eaecec'
				}
			},

			markerStyle: {
				initial: {
							r: 5,
							'fill': '#00acf0',
							'fill-opacity':1,
							'stroke': '#fff',
							'stroke-width' : 2,
							'stroke-opacity': 1
						},
				hover: {
					r: 5,
					'fill': '#00acf0',
					'fill-opacity':1,
					'stroke': '#fff',
					'stroke-width' : 2,
					'stroke-opacity': 1
				},
			},
		   
			markers : [{
				latLng : [21.00, 78.00],
				name : 'INDIA : 350'
			  
			  },
			  {
				latLng : [-33.00, 151.00],
				name : 'Australia : 250'
				
			  },
			  {
				latLng : [36.77, -119.41],
				name : 'USA : 250'
			  
			  },
			  {
				latLng : [55.37, -3.41],
				name : 'UK   : 250'
			  
			  },
			  {
				latLng : [25.20, 55.27],
				name : 'UAE : 250'
			  
			  }],

			series: {
				regions: [{
					values: {
						"US": '#7fd5f7',
						"SA": '#7fd5f7',
						"AU": '#7fd5f7',
						"IN": '#7fd5f7',
						"GB": '#7fd5f7',
					},
					attribute: 'fill'
				}]
			},
			hoverOpacity: null,
			normalizeFunction: 'linear',
			zoomOnScroll: false,
			scaleColors: ['#000000', '#000000'],
			selectedColor: '#000000',
			selectedRegions: [],
			enableZoom: false,
			hoverColor: '#fff',
		});
	}
	if( $('#regions_selection').length > 0 ){
		var map_2,
		markers = [
		{latLng: [52.50, 13.39], name: 'Berlin'},
		{latLng: [53.56, 10.00], name: 'Hamburg'},
		{latLng: [48.13, 11.56], name: 'Munich'},
		{latLng: [50.95, 6.96], name: 'Cologne'},
		{latLng: [50.11, 8.68], name: 'Frankfurt am Main'},
		{latLng: [48.77, 9.17], name: 'Stuttgart'},
		{latLng: [51.23, 6.78], name: 'Düsseldorf'},
		{latLng: [51.51, 7.46], name: 'Dortmund'},
		{latLng: [51.45, 7.01], name: 'Essen'},
		{latLng: [53.07, 8.80], name: 'Bremen'}
		],
		cityAreaData = [
			887.70,
			755.16,
			310.69,
			405.17,
			248.31,
			207.35,
			217.22,
			280.71,
			210.32,
			325.42
		]

		map_2 = new jvm.Map({
		container: $('#regions_selection'),
		map: 'de_merc',
		regionsSelectable: true,
		markersSelectable: true,
		markers: markers,
		backgroundColor: 'transparent',
		markerStyle: {
			initial: {
				fill: '#00acf0',
				r: 5,
				'fill-opacity':1,
				'stroke': '#fff',
				'stroke-width' : 2,
				'stroke-opacity': 1
			},
			hover: {
				fill: '#00acf0',
				r: 5,
				'fill-opacity':1,
				'stroke': '#fff',
				'stroke-width' : 2,
				'stroke-opacity': 1
			},
			selected: {
				fill: '#324148',
				r: 5,
				'fill-opacity':1,
				'stroke': '#fff',
				'stroke-width' : 2,
				'stroke-opacity': 1
			}
		},
		regionStyle: {
		  initial: {
			fill: '#eaecec'
		  },
		  selected: {
			fill: '#7fd5f7'
		  }
		},
		series: {
		  markers: [{
			attribute: 'r',
			scale: [5],
			values: cityAreaData
		  }]
		},
		onRegionSelected: function(){
		  if (window.localStorage) {
			window.localStorage.setItem(
			  'jvectormap-selected-regions',
			  JSON.stringify(map_2.getSelectedRegions())
			);
		  }
		},
		onMarkerSelected: function(){
		  if (window.localStorage) {
			window.localStorage.setItem(
			  'jvectormap-selected-markers',
			  JSON.stringify(map_2.getSelectedMarkers())
			);
		  }
		}
	  });
		map_2.setSelectedRegions( JSON.parse( window.localStorage.getItem('jvectormap-selected-regions') || '[]' ) );
		map_2.setSelectedMarkers( JSON.parse( window.localStorage.getItem('jvectormap-selected-markers') || '[]' ) );
	}
	if( $('#random_colors').length > 0 ){ 
		var palette = ['#ff936d', '#c66cc5', '#52bbac', '#ffd477', '#798cca'];
		var generateColors = function(){
		var colors = {},
			key;

		for (key in map.regions) {
		  colors[key] = palette[Math.floor(Math.random()*palette.length)];
		}
		return colors;
		},
		map;
		map = new jvm.Map({
			map: 'ru_mill',
			backgroundColor: 'transparent',
			container: $('#random_colors'),
			series: {
			  regions: [{
				attribute: 'fill'
			  }]
			}
		});
		function generateColor() {
			map.series.regions[0].setValues(generateColors());
		}	
		generateColor();
		setInterval(function(){ 
			map.series.regions[0].setValues(generateColors());
		}, 1500);

	}
	if( $('#reverse_projection').length > 0 ){ 
			var map_1,
			markerIndex = 0,
			markersCoords = {};
			map_1 = new jvm.Map({
				map: 'us_aea_en',
				backgroundColor: 'transparent',
				regionStyle : {
					initial : {
					  fill : '#eaecec'
					}
				},
				markerStyle: {
					initial: {
						fill: '#00acf0',
						r: 5,
						'fill-opacity':1,
						'stroke': '#fff',
						'stroke-width' : 2,
						'stroke-opacity': 1
					},
					hover: {
						fill: '#00acf0',
						r: 5,
						'fill-opacity':1,
						'stroke': '#fff',
						'stroke-width' : 2,
						'stroke-opacity': 1
					},
					selected: {
						fill: '#324148',
						r: 5,
						'fill-opacity':1,
						'stroke': '#fff',
						'stroke-width' : 2,
						'stroke-opacity': 1
					}
				},
			   
				container: $('#reverse_projection'),
				onMarkerTipShow: function(e, label, code){
					map_1.tip.text(markersCoords[code].lat.toFixed(2)+', '+markersCoords[code].lng.toFixed(2));
				},
				onMarkerClick: function(e, code){
					map_1.removeMarkers([code]);
					map_1.tip.hide();
				}
			});

			map_1.container.click(function(e){
			  var latLng = map_1.pointToLatLng(
					  e.pageX - map_1.container.offset().left,
					  e.pageY - map_1.container.offset().top
				  ),
				  targetCls = $(e.target).attr('class');

			  if (latLng && (!targetCls || (targetCls && $(e.target).attr('class').indexOf('jvectormap-marker') === -1))) {
				markersCoords[markerIndex] = latLng;
				map_1.addMarker(markerIndex, {latLng: [latLng.lat, latLng.lng]});
				markerIndex += 1;
			  }
		  });

	}
	if( $('#region_labels').length > 0 ){ 
		new jvm.Map({
			map: 'us_aea_en',
			backgroundColor: 'transparent',
			container: $('#region_labels'),
			regionStyle : {
				initial : {
				  fill : '#eaecec'
				}
		},
		regionLabelStyle: {
			initial: {
			'font-family': 'inherit',
			fill: '#00acf0'
			},
			hover: {
			fill: '#324148'
			}
		},
		labels: {
			regions: {
			render: function(code){
			  var doNotShow = ['US-RI', 'US-DC', 'US-DE', 'US-MD'];

			  if (doNotShow.indexOf(code) === -1) {
				return code.split('-')[1];
			  }
			},
			offsets: function(code){
			  return {
				'CA': [-10, 10],
				'ID': [0, 40],
				'OK': [25, 0],
				'LA': [-20, 0],
				'FL': [45, 0],
				'KY': [10, 5],
				'VA': [15, 5],
				'MI': [30, 30],
				'AK': [50, -25],
				'HI': [25, 50]
			  }[code.split('-')[1]];
			}
		  }
		}
	  });
	}
	if( $('#map_legends').length > 0 ){
		new jvm.Map({
		container: $('#map_legends'),
		backgroundColor: 'transparent',
		regionStyle : {
			initial : {
			  fill : '#eaecec'
			}
		},
		map: 'us_aea_en',
		markers: [
		  [61.18, -149.53],
		  [21.18, -157.49],
		  [40.66, -73.56],
		  [41.52, -87.37],
		  [35.22, -80.84],
		  [31.52, -87.37]
		],
		markerStyle: {
			initial: {
				fill: '#00acf0',
				r: 5,
				'fill-opacity':1,
				'stroke': '#fff',
				'stroke-width' : 2,
				'stroke-opacity': 1
			},
			hover: {
				fill: '#00acf0',
				r: 5,
				'fill-opacity':1,
				'stroke': '#fff',
				'stroke-width' : 2,
				'stroke-opacity': 1
			},
			selected: {
				fill: '#324148',
				r: 5,
				'fill-opacity':1,
				'stroke': '#fff',
				'stroke-width' : 2,
				'stroke-opacity': 1
			}
		},
		series: {
		  markers: [{
			attribute: 'fill',
			scale: ['#edf9fe', '#00acf0'],
			normalizeFunction: 'polynomial',
			values: [408, 512, 550, 781],
			legend: {
			  vertical: true
			}
		  },{
			attribute: 'image',
			scale: {
			  bank: 'dist/img/icon-bank.png',
			  factory: 'dist/img/icon-factory.png'
			},
			values: {
			  '4': 'bank',
			  '5': 'factory'
			},
			legend: {
			  horizontal: true,
			  cssClass: 'jvectormap-legend-icons',
			  title: 'Business type'
			}
		  }],
		  regions: [{
			scale: {
			  blue: '#0092ee',
			  teal: '#009b84'
			},
			attribute: 'fill',
			values: {
			  "US-KS": 'blue',
			  "US-MO": 'blue',
			  "US-IA": 'teal',
			  "US-NE": 'teal'
			},
			legend: {
			  horizontal: true,
			  title: 'Color'
			}
		  },{
			scale: {
			  redGreen: 'dist/img/bg-red-green.png',
			  yellowBlue: 'dist/img/bg-yellow-blue.png'
			},
			values: {
			  "US-TX": 'redGreen',
			  "US-CA": 'yellowBlue'
			},
			attribute: 'fill',
			legend: {
			  horizontal: true,
			  cssClass: 'jvectormap-legend-bg',
			  title: 'Pattern',
			  labelRender: function(v){
				return {
				  redGreen: 'low',
				  yellowBlue: 'high'
				}[v];
			  }
			}
		  }]
		}
	  });

	}
	if( $('#drill_down').length > 0 ){
		new jvm.MultiMap({
			container: $('#drill_down'),
			maxLevel: 1,
			main: {
				map: 'us_lcc_en',
				backgroundColor: 'transparent',
				regionStyle : {
					initial : {
					  fill : '#eaecec'
					}
				},
			},
			mapUrlByCode: function(code, multiMap){
			  return 'vendors/vectormap/us/jquery-jvectormap-data-'+
					 code.toLowerCase()+'-'+
					 multiMap.defaultProjection+'-en.js';
			}
		});
	}
});
 