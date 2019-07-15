/*Dashboard3 Init*/
 
"use strict"; 
$(document).ready(function() {
	/*Toaster Alert*/
	$.toast({
		heading: 'Oh snap!',
		text: '<p>Change a few things and try submitting again.</p>',
		position: 'bottom-right',
		loaderBg:'#00acf0',
		class: 'jq-toast-danger',
		hideAfter: 3500, 
		stack: 6,
		showHideTransition: 'fade'
	});
	
	if( $('#pie_chart_1').length > 0 ){
		$('#pie_chart_1').easyPieChart({
			barColor : '#00acf0',
			lineWidth: 3,
			animate: 3000,
			size:	50,
			lineCap: 'square',
			scaleColor: '#f5f5f6',
			trackColor: '#f5f5f6',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
	if( $('#pie_chart_2').length > 0 ){
		$('#pie_chart_2').easyPieChart({
			barColor : '#00acf0',
			lineWidth: 3,
			animate: 3000,
			size:	50,
			lineCap: 'square',
			scaleColor: '#f5f5f6',
			trackColor: '#f5f5f6',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
	if($('#m_chart_1').length > 0)
		Morris.Area({
        element: 'm_chart_1',
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
        pointSize: 5,
        fillOpacity: .03,
		lineWidth:2,
		pointStrokeColors:['#fff'],
		behaveLikeLine: true,
		hideHover: 'auto',
		gridLineColor: '#eaecec',
		lineColors: ['#00acf0'],
		resize: true,
		smooth:true,
		gridTextColor:'#5e7d8a',
		gridTextFamily:"Inherit"
        
    });
	if( $('.risk-switch').length > 0 )
		$('.risk-switch').toggles({
			drag: true, // allow dragging the toggle between positions
			click: true, // allow clicking on the toggle
			text: {
			on: '', // text for the ON position
			off: '' // and off
			},
			on: false, // is the toggle ON on init
			animate: 250, // animation time (ms)
			easing: 'swing', // animation transition easing function
			checkbox: null, // the checkbox to toggle (for use in forms)
			clicker: null, // element that can be clicked on to toggle. removes binding from the toggle itself (use nesting)
			
			type: 'compact' // if this is set to 'select' then the select style toggle will be used
		});
});

/*****E-Charts function start*****/
var echartsConfig = function() { 
	if( $('#e_chart_4').length > 0 ){
		var eChart_4 = echarts.init(document.getElementById('e_chart_4'));
		var option4 = {
			tooltip: {
				show: true,
				trigger: 'axis',
				backgroundColor: '#fff',
				borderRadius:6,
				padding:6,
				axisPointer:{
					lineStyle:{
						width:0,
					}
				},
				textStyle: {
					color: '#324148',
					fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
					fontSize: 12
				}	
			},
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				axisLine: {
					show:false
				},
				axisTick: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#5e7d8a'
					}
				}
			},
			yAxis: {
				type: 'value',
				axisLine: {
					show:false
				},
				axisTick: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#5e7d8a'
					}
				},
				splitLine: {
					lineStyle: {
						color: '#eaecec',
					}
				}
			},
		   
			series: [
				{
					data:[420, 332, 401, 334, 400, 330, 410],
					type: 'line',
					symbolSize: 0,
					itemStyle: {
						color: '#ffbf36',
					},
					lineStyle: {
						color: '#ffbf36',
						width:0,
					},
					areaStyle: {
						color: '#ffbf36',
						opacity:1
					},
				},
				{
					data: [220, 182, 291, 134, 290, 130, 210],
					type: 'line',
					symbolSize: 0,
					itemStyle: {
						color: '#f83f37',
					},
					lineStyle: {
						color: '#f83f37',
						width:0,
					},
					areaStyle: {
						color: '#f83f37',
						opacity:1
					},
				}
			]
		};
		eChart_4.setOption(option4);
		eChart_4.resize();
	}
	
	if( $('#e_chart_5').length > 0 ){
		var eChart_5 = echarts.init(document.getElementById('e_chart_5'));
		var option5 = {
			color: ['#ab26aa', '#d6d9da'],		
			tooltip: {
				show: true,
				trigger: 'axis',
				backgroundColor: '#fff',
				borderRadius:6,
				padding:6,
				axisPointer:{
					lineStyle:{
						width:0,
					}
				},
				textStyle: {
					color: '#324148',
					fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
					fontSize: 12
				}	
			},
			
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'category',
					data : ['2011','2012','2013','2014','2015','2016','2017','2018'],
					axisLine: {
						show:false
					},
					axisTick: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#5e7d8a'
						}
					}
				}
			],
			yAxis : [
				{
					type : 'value',
					axisLine: {
						show:false
					},
					axisTick: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#5e7d8a'
						}
					},
					splitLine: {
						lineStyle: {
							color: '#eaecec',
						}
					}
				}
			],
			series : [
				{
					name:'1',
					type:'bar',
					barMaxWidth: 30,
					data:[320, 332, 301, 334, 390, 330, 320,200],
				},
				{
					name:'2',
					type:'bar',
					barMaxWidth: 30,
					data:[120, 132, 101, 134, 90, 230, 210,180],
				}
			]
		};

		eChart_5.setOption(option5);
		eChart_5.resize();
	}

	if( $('#e_chart_9').length > 0 ){
		var eChart_9 = echarts.init(document.getElementById('e_chart_9'));
		var option8 = {
			color: ['#00acf0', '#22af47'],
			tooltip: {
				show: true,
				trigger: 'axis',
				backgroundColor: '#fff',
				borderRadius:6,
				padding:6,
				axisPointer:{
					lineStyle:{
						width:0,
					}
				},
				textStyle: {
					color: '#324148',
					fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
					fontSize: 12
				}	
			},
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [{
				type: 'value',
				axisLine: {
					show:false
				},
				axisTick: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#5e7d8a'
					}
				},
				splitLine: {
					lineStyle: {
						color: '#eaecec',
					}
				}
			}],
			yAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu'],
				axisLine: {
					show:false
				},
				axisTick: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#5e7d8a'
					}
				}
			},
			series: [{
					name:'1',
					type:'bar',
					stack: 'st1',
					barMaxWidth: 7.5,
					data:[320, 332, 301, 334, 390, 330, 320,334, 390, 330, 320],
				},
				{
					name:'2',
					type:'bar',
					stack: 'st1',
					barMaxWidth: 7.5,
					data:[-120, -132, -101, -134, -90, -230, -210,-134, -90, -230, -210],
				}]
		};
		eChart_9.setOption(option8);
		eChart_9.resize();
	}
	
	if( $('#e_chart_10').length > 0 ){
		var eChart_10 = echarts.init(document.getElementById('e_chart_10'));
		
		var option9 = {
			tooltip: {
				show: true,
				backgroundColor: '#fff',
				borderRadius:6,
				padding:6,
				axisPointer:{
					lineStyle:{
						width:0,
					}
				},
				textStyle: {
					color: '#324148',
					fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
					fontSize: 12
				}	
			},
			series: [
				{
					name:'',
					type:'pie',
					radius: ['40%', '50%'],
					color: ['#00acf0', '#ffbf36', '#f83f37', '#22af47'],
					data:[
						{value:435, name:''},
						{value:679, name:''},
						{value:848, name:''},
						{value:348, name:''},
					],
					label: {
						normal: {
							formatter: '{b}\n{d}%'
						},
				  
					}
				}
			]
		};
		eChart_10.setOption(option9);
		eChart_10.resize();
	}
}
/*****E-Charts function end*****/

/*****Resize function start*****/
var echartResize;
$(window).on("resize", function () {
	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
}).resize(); 
/*****Resize function end*****/

/*****Function Call start*****/
echartsConfig();
/*****Function Call end*****/