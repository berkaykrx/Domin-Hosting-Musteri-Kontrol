/*Dashboard3 Init*/
 
"use strict"; 
$(document).ready(function() {
	/*Toaster Alert*/
	$.toast({
		heading: 'Hoşgeldiniz!',
		text: '<p>Başarılı Şekilde Giriş Yaptınız!</p>',
		position: 'top-right',
		loaderBg:'#00acf0',
		class: 'jq-toast-primary',
		hideAfter: 3500, 
		stack: 6,
		showHideTransition: 'fade'
	});
	
	/*Owl Carousel*/
	$('#owl_demo_1').owlCarousel({
		items: 1,
		animateOut: 'fadeOut',
		loop: true,
		margin: 10,
		autoplay: true,
		mouseDrag: false,
		dots:false

	});
});

/*****E-Charts function start*****/
var echartsConfig = function() { 
	if( $('#e_chart_5').length > 0 ){
		var eChart_5 = echarts.init(document.getElementById('e_chart_5'));
		var option4 = {
			color: ['#00acf0', '#009b84','#88c241','#ffbf36','#d6d9da'],		
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
					data : ['Female','Male'],
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
					barMaxWidth: 18,
					data:[320, 332],
					barGap:'70%',
				},
				{
					name:'2',
					type:'bar',
					barMaxWidth: 18,
					data:[120, 132],
					barGap:'70%',
				},
				{
					name:'3',
					type:'bar',
					barMaxWidth: 18,
					data:[220, 182],
					barGap:'70%',
				},
				{
					name:'4',
					type:'bar',
					barMaxWidth: 18,
					data:[150, 232],
					barGap:'70%',
				},
				{
					name:'5',
					type:'bar',
					barMaxWidth: 18,
					data:[170, 222],
					barGap:'70%',
				}
			]
		};

		eChart_5.setOption(option4);
		eChart_5.resize();
	}
	
	if( $('#e_chart_6').length > 0 ){
		var eChart_6 = echarts.init(document.getElementById('e_chart_6'));
		var option5 = {
			color: ['#d6d9da'],
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
		   
			series: [
				{
					data:[420, 332, 401, 334, 400, 330, 410],
					type: 'bar',
					barMaxWidth: 30,
				},
				{
					data: [220, 282, 391, 300, 390, 230, 210],
					type: 'line',
					symbolSize: 6,
					itemStyle: {
						color: '#22af47',
					},
					lineStyle: {
						color: '#22af47',
						width:2,
					}
				},
				{
					data: [120, 152, 251, 124, 250, 120, 110],
					type: 'line',
					symbolSize: 6,
					itemStyle: {
						color: '#00acf0',
					},
					lineStyle: {
						color: '#00acf0',
						width:2,
					}
				}
			]
		};
		eChart_6.setOption(option5);
		eChart_6.resize();
	}
	
	if( $('#e_chart_9').length > 0 ){
		var eChart_9 = echarts.init(document.getElementById('e_chart_9'));
		var option8 = {
			color: ['#22af47', '#d6d9da'],
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
				data: ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12', '13', '14'],
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
			series: [{
					name:'1',
					type:'bar',
					stack: 'st1',
					barMaxWidth: 10,
					data:[320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320],
					itemStyle: {
						normal: {
							barBorderRadius: [50, 50, 0, 0] ,
						}
					},
				},
				{
					name:'2',
					type:'bar',
					stack: 'st1',
					barMaxWidth: 10,
					data:[-120, -132, -101, -134, -90, -230, -210,-120, -132, -101, -134, -90, -230, -210],
					itemStyle: {
						normal: {
							barBorderRadius: [0, 0, 50, 50] ,
						}
					},

				}]
		};
		eChart_9.setOption(option8);
		eChart_9.resize();
	}
}
/*****E-Charts function end*****/

var sparklineLogin = function() { 
	if( $('#sparkline_1').length > 0 ){
		$("#sparkline_1").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
			type: 'line',
			width: '100',
			height: '34',
			resize: true,
			lineWidth: '1',
			lineColor: '#00acf0',
			fillColor: '#edf9fe',
			spotColor:'00acf0',
			spotRadius:'0',
			minSpotColor: '#00acf0',
			maxSpotColor: '#00acf0',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#00acf0'
		});
	}	
	if( $('#sparkline_2').length > 0 ){
		$("#sparkline_2").sparkline([2,7,7,5,8,5,4,4,3,4,6,1 ], {
			type: 'line',
			width: '100',
			height: '34',
			resize: true,
			lineWidth: '1',
			lineColor: '#00acf0',
			fillColor: '#edf9fe',
			spotColor:'00acf0',
			spotRadius:'0',
			minSpotColor: '#00acf0',
			maxSpotColor: '#00acf0',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#00acf0'
		});
	}	
	if( $('#sparkline_3').length > 0 ){
		$("#sparkline_3").sparkline([9,3,3,2,8,6,4,3,3,2,6,1 ], {
			type: 'line',
			width: '100',
			height: '34',
			resize: true,
			lineWidth: '1',
			lineColor: '#00acf0',
			fillColor: '#edf9fe',
			spotColor:'00acf0',
			spotRadius:'0',
			minSpotColor: '#00acf0',
			maxSpotColor: '#00acf0',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#00acf0'
		});
	}
	if( $('#sparkline_4').length > 0 ){
		$("#sparkline_4").sparkline([5,3,3,2,1,6,2,3,5,2,2,1 ], {
			type: 'line',
			width: '100',
			height: '34',
			resize: true,
			lineWidth: '1',
			lineColor: '#00acf0',
			fillColor: '#edf9fe',
			spotColor:'00acf0',
			spotRadius:'0',
			minSpotColor: '#00acf0',
			maxSpotColor: '#00acf0',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#00acf0'
		});
	}
}
sparklineLogin();

/*****Resize function start*****/
var sparkResize,echartResize;
$(window).on("resize", function () {
	/*Sparkline Resize*/
	clearTimeout(sparkResize);
	sparkResize = setTimeout(sparklineLogin, 200);
	
	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
}).resize(); 
/*****Resize function end*****/

/*****Function Call start*****/
echartsConfig();
/*****Function Call end*****/