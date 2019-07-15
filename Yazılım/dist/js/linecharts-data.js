/*Dashboard Init*/
 
"use strict"; 

/*****Ready function start*****/
$(document).ready(function(){
	if($('#m_chart_2').length > 0)
		Morris.Line({
        element: 'm_chart_2',
        data: [{
            period: '2010',
            iphone: 50,
        }, {
            period: '2011',
            iphone: 130,
        }, {
            period: '2012',
            iphone: 80,
        }, {
            period: '2013',
            iphone: 70,
        }, {
            period: '2014',
            iphone: 180,
        }, {
            period: '2015',
            iphone: 105,
        },
         {
            period: '2016',
            iphone: 250,
        }],
        xkey: 'period',
        ykeys: ['iphone'],
        labels: ['iPhone'],
        pointSize: 3,
        fillOpacity: 0,
		lineWidth:2,
		pointFillColors:['#fff'],
		pointStrokeColors:['#00acf0'],
		behaveLikeLine: true,
		hideHover: 'auto',
		gridLineColor: '#eaecec',
		lineColors: ['#00acf0'],
		resize: true,
		smooth:false,
		gridTextColor:'#5e7d8a',
		gridTextFamily:"Inherit"
        
    });
	if( $('#m_chart_4').length > 0 ){
		// Line Chart
		var data=[{ y: '100', a: 10, b: 20, c: 40},
				  { y: '200', a: 30, b: 50, c: 70},
				  { y: '300', a: 20, b: 40, c: 50},
				  { y: '400', a: 50, b: 70, c: 90},
				  { y: '500', a: 10, b: 40, c: 100},
				  
				];
		var lineChart = Morris.Line({
				element: 'm_chart_4',
				data: data,
				xkey: 'y',
				ykeys: ['a', 'b', 'c'],
				labels: ['Total Income', 'Total Outcome', 'Total Expences'],
				gridLineColor: '#eaecec',
				resize: true,
				gridTextColor:'#5e7d8a',
				gridTextFamily:"Inherit",
				hideHover: 'auto',
				behaveLikeLine: true,
				smooth:false,
				pointSize:3,
				lineWidth:2,
				pointFillColors:['#fff','#fff','#fff'],
				pointStrokeColors: ['#00acf0','#22af47','#f83f37'],
				lineColors: ['#00acf0','#22af47','#f83f37'],
			});	
	}
});
