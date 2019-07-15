/*Dashboard3 Init*/
 
"use strict"; 

/*****E-Charts function start*****/
var echartsConfig = function() { 
	if( $('#e_chart_1').length > 0 ){
		var eChart_1 = echarts.init(document.getElementById('e_chart_1'));
		var option = {
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
				data: [120, 200, 150, 80, 70, 110, 130],
				type: 'bar',
				barMaxWidth: 30,
				itemStyle: {
					normal: {
						barBorderRadius: [6, 6, 0, 0] ,
					}
				},
			}]
		};
		eChart_1.setOption(option);
		eChart_1.resize();
	}
	if( $('#e_chart_2').length > 0 ){
		var eChart_2 = echarts.init(document.getElementById('e_chart_2'));
		var option1 = {
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
				},
			},
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			series: [{
				data: [120, 200, 150, 80, 70, 110, 130],
				type: 'bar',
				barMaxWidth: 30,
				itemStyle: {
					normal: {
						barBorderRadius: [0, 6, 6, 0] ,
					}
				},
			}]
		};
		eChart_2.setOption(option1);
		eChart_2.resize();
	}
	if( $('#e_chart_3').length > 0 ){
		var eChart_3 = echarts.init(document.getElementById('e_chart_3'));
		var option2 = {
			color: ['#00acf0', '#22af47','#f83f37','#ffbf36'],		
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
					data : ['2011','2012','2013','2014','2015','2016','2017'],
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
					stack: 'st1',
					barMaxWidth: 30,
					data:[320, 332, 301, 334, 390, 330, 320],
				},
				{
					name:'2',
					type:'bar',
					stack: 'st1',
					barMaxWidth: 30,
					data:[120, 132, 101, 134, 90, 230, 210],
				},
				{
					name:'3',
					type:'bar',
					stack: 'st1',
					barMaxWidth: 30,
					data:[220, 182, 191, 234, 290, 330, 310],
				},
				{
					name:'4',
					type:'bar',
					stack: 'st1',
					barMaxWidth: 30,
					data:[150, 232, 201, 154, 190, 330, 410],
					itemStyle: {
						normal: {
							barBorderRadius: [6, 6, 0, 0] ,
						}
					},
				}
			]
		};

		eChart_3.setOption(option2);
		eChart_3.resize();
	}
	if( $('#e_chart_4').length > 0 ){
		var eChart_4 = echarts.init(document.getElementById('e_chart_4'));
		var option3 = {
			color: ['#00acf0', '#22af47','#f83f37','#ffbf36'],		
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
			yAxis : [
				{
					type : 'category',
					data : ['2011','2012','2013','2014','2015','2016','2017'],
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
			series : [
				{
					name:'1',
					type:'bar',
					stack: 'st1',
					barMaxWidth: 30,
					data:[320, 332, 301, 334, 390, 330, 320],
				},
				{
					name:'2',
					type:'bar',
					stack: 'st1',
					barMaxWidth: 30,
					data:[120, 132, 101, 134, 90, 230, 210],
				},
				{
					name:'3',
					type:'bar',
					stack: 'st1',
					barMaxWidth: 30,
					data:[220, 182, 191, 234, 290, 330, 310],
				},
				{
					name:'4',
					type:'bar',
					stack: 'st1',
					barMaxWidth: 30,
					data:[150, 232, 201, 154, 190, 330, 410],
					itemStyle: {
					normal: {
						barBorderRadius: [0, 6, 6, 0] ,
					}
				},
				}
			]
		};

		eChart_4.setOption(option3);
		eChart_4.resize();
	}
	if( $('#e_chart_5').length > 0 ){
		var eChart_5 = echarts.init(document.getElementById('e_chart_5'));
		var option4 = {
			color: ['#00acf0', '#22af47','#f83f37','#ffbf36'],		
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
					data : ['2011','2012','2013','2014','2015','2016','2017'],
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
					data:[320, 332, 301, 334, 390, 330, 320],
					itemStyle: {
						normal: {
							barBorderRadius: [6, 6, 0, 0] ,
						}
					},
				},
				{
					name:'2',
					type:'bar',
					barMaxWidth: 30,
					data:[120, 132, 101, 134, 90, 230, 210],
					itemStyle: {
						normal: {
							barBorderRadius: [6, 6, 0, 0] ,
						}
					},
				},
				{
					name:'3',
					type:'bar',
					barMaxWidth: 30,
					data:[220, 182, 191, 234, 290, 330, 310],
					itemStyle: {
						normal: {
							barBorderRadius: [6, 6, 0, 0] ,
						}
					},
				},
				{
					name:'4',
					type:'bar',
					barMaxWidth: 30,
					data:[150, 232, 201, 154, 190, 330, 410],
					itemStyle: {
						normal: {
							barBorderRadius: [6, 6, 0, 0] ,
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
		var option5 = {
			color: ['#00acf0', '#22af47','#f83f37','#ffbf36'],		
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
			yAxis : [
				{
					type : 'category',
					data : ['2011','2012','2013','2014','2015','2016','2017'],
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
			series : [
				{
					name:'1',
					type:'bar',
					barMaxWidth: 30,
					data:[320, 332, 301, 334, 390, 330, 320],
					itemStyle: {
						normal: {
							barBorderRadius: [0, 6, 6, 0] ,
						}
					},

				},
				{
					name:'2',
					type:'bar',
					barMaxWidth: 30,
					data:[120, 132, 101, 134, 90, 230, 210],
					itemStyle: {
						normal: {
							barBorderRadius: [0, 6, 6, 0] ,
						}
					},
				},
				{
					name:'3',
					type:'bar',
					barMaxWidth: 30,
					data:[220, 182, 191, 234, 290, 330, 310],
					itemStyle: {
						normal: {
							barBorderRadius: [0, 6, 6, 0] ,
						}
					},
				},
				{
					name:'4',
					type:'bar',
					barMaxWidth: 30,
					data:[150, 232, 201, 154, 190, 330, 410],
					itemStyle: {
						normal: {
							barBorderRadius: [0, 6, 6, 0] ,
						}
					},
				}
			]
		};

		eChart_6.setOption(option5);
		eChart_6.resize();
	}
	if( $('#e_chart_7').length > 0 ){
		var eChart_7 = echarts.init(document.getElementById('e_chart_7'));
		var option6 = {
			color: ['#00acf0','#22af47'],
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
				name:'1',
				type:'bar',
				barMaxWidth: 30,
				data:[320, 332, 301, 334, 390, 330, 320],
				itemStyle: {
					normal: {
						barBorderRadius: [6, 6, 0, 0] ,
					}
				},
			},
			{
				name:'2',
				type:'bar',
				barMaxWidth: 30,
				data:[-120, -132, -101, -134, -90, -230, -210],
				itemStyle: {
					normal: {
						barBorderRadius: [0, 0, 6, 6] ,
					}
				},
			}]
		};
		eChart_7.setOption(option6);
		eChart_7.resize();
	}
	if( $('#e_chart_8').length > 0 ){
		var eChart_8 = echarts.init(document.getElementById('e_chart_8'));
		var option7 = {
			color: ['#00acf0','#22af47'],
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
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			series: [{
				name:'1',
				type:'bar',
				barMaxWidth: 30,
				data:[320, 332, 301, 334, 390, 330, 320],
				itemStyle: {
					normal: {
						barBorderRadius: [0, 6, 6, 0] ,
					}
				},
			},
			{
				name:'2',
				type:'bar',
				barMaxWidth: 30,
				data:[-120, -132, -101, -134, -90, -230, -210],
				itemStyle: {
					normal: {
						barBorderRadius: [6, 0, 0, 6] ,
					}
				},
			}]
		};
		eChart_8.setOption(option7);
		eChart_8.resize();
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
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			series: [{
					name:'1',
					type:'bar',
					stack: 'st1',
					barMaxWidth: 30,
					data:[320, 332, 301, 334, 390, 330, 320],
					itemStyle: {
						normal: {
							barBorderRadius: [0, 6, 6, 0] ,
						}
					},
				},
				{
					name:'2',
					type:'bar',
					stack: 'st1',
					barMaxWidth: 30,
					data:[-120, -132, -101, -134, -90, -230, -210],
					itemStyle: {
						normal: {
							barBorderRadius: [6, 0, 0, 6] ,
						}
					},
				}]
		};
		eChart_9.setOption(option8);
		eChart_9.resize();
	}
	if( $('#e_chart_10').length > 0 ){
		var eChart_10 = echarts.init(document.getElementById('e_chart_10'));
		var option9 = {
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
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			series: [{
					name:'1',
					type:'bar',
					stack: 'st1',
					barMaxWidth: 30,
					label: {
						normal: {
							show: true,
							position: 'right'
						}
					},
					data:[320, 332, 301, 334, 390, 330, 320],
					itemStyle: {
						normal: {
							barBorderRadius: [0, 6, 6, 0] ,
						}
					},
				},
				{
					name:'2',
					type:'bar',
					stack: 'st1',
					 label: {
						normal: {
							show: true,
							position: 'left'
						}
					},
					barMaxWidth: 30,
					data:[-120, -132, -101, -134, -90, -230, -210],
					itemStyle: {
						normal: {
							barBorderRadius: [6, 0, 0, 6] ,
						}
					},
				}]
		};
		eChart_10.setOption(option9);
		eChart_10.resize();
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
				data: [120, 200, 150, 80, 70, 110, 130],
				type: 'bar',
				barMaxWidth: 30,
				itemStyle: {
					normal: {
						barBorderRadius: [6, 6, 0, 0] ,
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