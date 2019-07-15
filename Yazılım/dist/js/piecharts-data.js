/*Pie Charts Init*/
 
"use strict"; 

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
					radius : '55%',
					color: ['#00acf0', '#ffbf36', '#f83f37', '#22af47'],
					data:[
						{value:435, name:''},
						{value:679, name:''},
						{value:848, name:''},
						{value:348, name:''},
					],
					labelLine: {
						show:false
					}
				}
			]
		};
		eChart_1.setOption(option);
		eChart_1.resize();
	}
	if( $('#e_chart_2').length > 0 ){
		var eChart_2 = echarts.init(document.getElementById('e_chart_2'));
		
		var option1 = {
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
					radius : '55%',
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
		eChart_2.setOption(option1);
		eChart_2.resize();
	}
	if( $('#e_chart_3').length > 0 ){
		var eChart_3 = echarts.init(document.getElementById('e_chart_3'));
		
		var option2 = {
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
					radius: ['30%', '50%'],
					color: ['#00acf0', '#ffbf36', '#f83f37', '#22af47'],
					data:[
						{value:435, name:''},
						{value:679, name:''},
						{value:848, name:''},
						{value:348, name:''},
					],
					labelLine: {
						show:false
					}
				}
			]
		};
		eChart_3.setOption(option2);
		eChart_3.resize();
	}
	if( $('#e_chart_4').length > 0 ){
		var eChart_4 = echarts.init(document.getElementById('e_chart_4'));
		
		var option3 = {
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
					radius: ['30%', '50%'],
					color: ['#00acf0', '#ffbf36', '#f83f37', '#22af47'],
					data:[
						{value:435, name:'a'},
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
		eChart_4.setOption(option3);
		eChart_4.resize();
	}
	if( $('#e_chart_5').length > 0 ){
		var eChart_5 = echarts.init(document.getElementById('e_chart_5'));
		
		var option4 = {
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
					radius: ['30%', '50%'],
					color: ['#00acf0', '#ffbf36', '#f83f37', '#22af47'],
					data:[
						{value:435, name:''},
						{value:679, name:''},
						{value:848, name:''},
						{value:348, name:''},
					],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show:false,
							formatter: '{b}\n{d}%',
							position: 'inside'
						},
						emphasis: {
							show: true,
							textStyle: {
								fontSize: '15'
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
				}
			]
		};
		eChart_5.setOption(option4);
		eChart_5.resize();
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
				color: '#22af47',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			},
			emphasis: {
				color: '#22af47'
			}
		};
		var option5 = {
			backgroundColor: '#fff',
			title: {
				text: '匹配度',
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
					radius: ['40%', '50%'],
					center:['50%','50%'],
					itemStyle: dataStyle,
					hoverAnimation: false,
					startAngle: 90,
					label:{
						borderRadius:'10',
					},
					data: [{
							value: 54.6,
							name: 'b',
							itemStyle: {
								normal: {
									color: '#00acf0'
								}
							}
						},
						{
							value: 45.4,
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
					radius: ['80%', '70%'],
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
	if( $('#e_chart_7').length > 0 ){
		var eChart_7 = echarts.init(document.getElementById('e_chart_7'));
		
		var option6 = {
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
		eChart_7.setOption(option6);
		eChart_7.resize();
	}
	if( $('#e_chart_8').length > 0 ){
		var eChart_8 = echarts.init(document.getElementById('e_chart_8'));
		
		var option7 = {
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
					radius: ['45%', '50%'],
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
		eChart_8.setOption(option7);
		eChart_8.resize();
	}
	if( $('#e_chart_9').length > 0 ){
		var eChart_9 = echarts.init(document.getElementById('e_chart_9'));
		
		var option8 = {
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
					radius : '60%',
					center : ['50%', '50%'],
					roseType : 'radius',
					color: ['#00acf0', '#ffbf36', '#f83f37', '#22af47'],
					data:[
						{value:435, name:''},
						{value:679, name:''},
						{value:848, name:''},
						{value:348, name:''},
					],
					labelLine: {
						show:false
					}
				}
			]
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
					radius : '60%',
					center : ['50%', '50%'],
					roseType : 'radius',
					color: ['#00acf0', '#ffbf36', '#f83f37', '#22af47'],
					data:[
						{value:735, name:''},
						{value:479, name:''},
						{value:548, name:''},
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
var sparkResize,echartResize;
$(window).on("resize", function () {
	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);

}).resize(); 
/*****Resize function end*****/

/*****Function Call start*****/
echartsConfig();
/*****Function Call end*****/