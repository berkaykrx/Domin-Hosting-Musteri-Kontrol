/*Dashboard3 Init*/
 
"use strict"; 
$(document).ready(function() {
	if( $('.peity-line').length > 0 ){
		/*line*/
		$('.peity-line').each(function() {
			$(this).peity("line", $(this).data());
		});
	}
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
	if( $('#m_chart_3').length > 0 ){
		// Line Chart
		var data=[{ y: '100', a: 10, b: 20},
				  { y: '200', a: 30, b: 50},
				  { y: '300', a: 20, b: 40},
				  { y: '400', a: 50, b: 70},
				  { y: '500', a: 10, b: 40},
				  
				];
		var lineChart = Morris.Line({
				element: 'm_chart_3',
				data: data,
				xkey: 'y',
				ykeys: ['a', 'b'],
				labels: ['Total Income', 'Total Outcome'],
				gridLineColor: '#eaecec',
				resize: true,
				gridTextColor:'#5e7d8a',
				gridTextFamily:"Inherit",
				hideHover: 'auto',
				behaveLikeLine: true,
				smooth:false,
				pointSize: 0,
				lineWidth:2,
				pointFillColors:['#00acf0','#22af47'],
				pointStrokeColors: ['#00acf0','#22af47'],
				lineColors: ['#00acf0','#22af47'],
			});	
	}
});

var sparklineLogin = function() { 
	if( $('#sparkline_1').length > 0 ){
		$("#sparkline_1").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
			type: 'line',
			width: '100%',
			height: '50',
			resize: true,
			lineWidth: '1',
			lineColor: '#00acf0',
			fillColor: '#edf9fe',
			spotColor:'00acf0',
			spotRadius:'2',
			minSpotColor: '#00acf0',
			maxSpotColor: '#00acf0',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#00acf0'
		});
	}
	if( $('#sparkline_2').length > 0 ){
		$("#sparkline_2").sparkline([7,4,5,6,8,5,6,4,9,6,6,2 ], {
			type: 'line',
			width: '100%',
			height: '50',
			resize: true,
			lineWidth: '1',
			lineColor: '#00acf0',
			fillColor: '#edf9fe',
			spotColor:'00acf0',
			spotRadius:'2',
			minSpotColor: '#00acf0',
			maxSpotColor: '#00acf0',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#00acf0'
		});
	}
	if( $('#sparkline_3').length > 0 ){
		$("#sparkline_3").sparkline([5,4,5,5,8,5,6,4,5,6,6,2 ], {
			type: 'line',
			width: '100%',
			height: '50',
			resize: true,
			lineWidth: '1',
			lineColor: '#00acf0',
			fillColor: '#edf9fe',
			spotColor:'00acf0',
			spotRadius:'2',
			minSpotColor: '#00acf0',
			maxSpotColor: '#00acf0',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#00acf0'
		});
	}
	if( $('#sparkline_4').length > 0 ){
		$("#sparkline_4").sparkline([20,4,4], {
			type: 'pie',
			width: '50',
			height: '50',
			resize: true,
			sliceColors: ['#00acf0', '#7fc8f6', '#b642b5']
		});
	}
	if( $('#sparkline_5').length > 0 ){
		$("#sparkline_5").sparkline([10,30,20], {
			type: 'pie',
			width: '50',
			height: '50',
			resize: true,
			sliceColors: ['#8b6a61', '#ffc750', '#ffa344']
		});
	}
}

/*****E-Charts function start*****/
var echartsConfig = function() { 
	if( $('#e_chart_1').length > 0 ){
		var eChart_1 = echarts.init(document.getElementById('e_chart_1'));
		var option = {
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
					radius : '80%',
					color: ['#00acf0', '#7fc8f6', '#b642b5', '#69c982'],
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
		eChart_1.setOption(option);
		eChart_1.resize();
	}
	if( $('#e_chart_6').length > 0 ){
		var eChart_6 = echarts.init(document.getElementById('e_chart_6'));
		var dataStyle = {
			normal: {
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				shadowBlur: 40,
				borderWidth: 10,
				shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
			}
		};
		var placeHolderStyle = {
			normal: {
				color: '#d6d9da',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			},
			emphasis: {
				color: '#d6d9da'
			}
		};
		var option5 = {
			backgroundColor: '#fff',
			title: {
				text: '',
				x: 'center',
				y: 'center',
				textStyle: {
					color: '#324148',
					fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
					fontSize: 12
				}	
			},
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
			series: [{
					name: 'Line 1',
					type: 'pie',
					clockWise: false,
					radius: ['60%', '65%'],
					center:['50%','50%'],
					itemStyle: dataStyle,
					hoverAnimation: false,
					startAngle: 90,
					label:{
						borderRadius:'10',
					},
					data: [{
							value: 30,
							name: 'b',
							itemStyle: {
								normal: {
									color: '#ab26aa'
								}
							}
						},
						{
							value: 70,
							name: '',
							tooltip: {
								show: false
							},
							itemStyle: placeHolderStyle
						},
					]
				},
				{
					name: 'Line 2',
					type: 'pie',
					clockWise: false,
					radius: ['70%', '75%'],
					center:['50%','50%'],
					itemStyle: dataStyle,
					hoverAnimation: false,
					startAngle: 90,
					data: [{
							value: 40,
							name: 'a',
							itemStyle: {
								normal: {
									color: '#22af47'
								}
							}
						},
						{
							value: 60,
							name: '',
							tooltip: {
								show: false
							},
							itemStyle: placeHolderStyle
						},
					]
				},
				{
					name: 'Line 3',
					type: 'pie',
					clockWise: false,
					radius: ['80%', '85%'],
					center:['50%','50%'],
					itemStyle: dataStyle,
					hoverAnimation: false,
					startAngle: 90,
					data: [{
							value: 56.7,
							name: 'a',
							itemStyle: {
								normal: {
									color: '#00acf0'
								}
							}
						},
						{
							value: 43.3,
							name: '',
							tooltip: {
								show: false
							},
							itemStyle: placeHolderStyle
						},
					]
				},
			]
		};
		eChart_6.setOption(option5);
		eChart_6.resize();
	}
	if( $('#e_chart_11').length > 0 ){
		var eChart_11 = echarts.init(document.getElementById('e_chart_11'));
		var option10 = {
			color: ['#00acf0'],
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
			
			xAxis: [{
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
			}],
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
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			series: [{
				data: [120, 200, 150, 80, 70, 110, 130, 80, 70, 110, 130],
				type: 'bar',
				barMaxWidth: 30,
				itemStyle: {
					normal: {
						barBorderRadius: [2, 2, 0, 0] ,
					}
				},
				label: {
					normal: {
						show: true,
						position: 'inside'
					}
				},
			}]
		};
		eChart_11.setOption(option10);
		eChart_11.resize();
	}
	if( $('#e_chart_12').length > 0 ){
		var eChart_12 = echarts.init(document.getElementById('e_chart_12'));
		var option11 = {
			color: ['#00acf0'],
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
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: 'inherit',
					fontSize: 12
				}	
			},
			
			xAxis: [{
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
			}],
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
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			series: [{
				data: [20, 100, 150, 90, 170, 210, 130,20, 100, 150, 90],
				type: 'bar',
				barMaxWidth: 30,
				itemStyle: {
					normal: {
						barBorderRadius: [2, 2, 0, 0] ,
					}
				},
				label: {
					normal: {
						show: true,
						position: 'inside'
					}
				},
			}]
		};
		eChart_12.setOption(option11);
		eChart_12.resize();
	}
	if( $('#e_chart_13').length > 0 ){
		var eChart_13 = echarts.init(document.getElementById('e_chart_13'));
		var option12 = {
			color: ['#00acf0'],
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
			
			xAxis: [{
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
			}],
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
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			series: [{
				data: [100, 110, 50, 90, 70, 110, 130,100, 110, 50, 90],
				type: 'bar',
				barMaxWidth: 30,
				itemStyle: {
					normal: {
						barBorderRadius: [2, 2, 0, 0] ,
					}
				},
				label: {
					normal: {
						show: true,
						position: 'inside'
					}
				},
			}]
		};
		eChart_13.setOption(option12);
		eChart_13.resize();
	}
}
/*****E-Charts function end*****/
$('#dash-tab a').on('click', function (e) {
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
})

/*****Resize function start*****/
var sparkResize,echartResize;
$(window).on("resize", function () {
	/*Sparkline-Chart Resize*/
	clearTimeout(sparkResize);
	sparkResize = setTimeout(sparklineLogin, 200);
	
	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
}).resize(); 
/*****Resize function end*****/

/*****Function Call start*****/
echartsConfig();
sparklineLogin();
/*****Function Call end*****/