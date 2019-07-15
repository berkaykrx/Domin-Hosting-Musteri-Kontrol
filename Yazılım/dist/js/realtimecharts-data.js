/*Dashboard Init*/
 
"use strict"; 
var data = [],
	totalPoints = 300;

	/*Getting Random Data*/
	function getRandomData() {

		if (data.length > 0)
			data = data.slice(1);

		// Do a random walk

		while (data.length < totalPoints) {

			var prev = data.length > 0 ? data[data.length - 1] : 50,
				y = prev + Math.random() * 10 - 5;

			if (y < 0) {
				y = 0;
			} else if (y > 100) {
				y = 100;
			}

			data.push(y);
		}

		// Zip the generated y values with the x values

		var res = [];
		for (var i = 0; i < data.length; ++i) {
			res.push([i, data[i]])
		}

		return res;
	}
	
	/***Filled Line Chart***/
	if( $('#flot_line_chart_moving').length > 0 ){	
		/*Defining Option*/
		var fill_line_chartop = {
			series:{
				shadowSize: 0,
				lines: {
					fill: false
				},
			},
				grid: {
				color: "#eaecec",
				hoverable: true,
				borderWidth: 0,
				backgroundColor: 'transparent'
			},
			colors: ["#00acf0s"],
			tooltip: true,
			tooltipOpts: {
				content: "Y: %y",
				defaultTheme: false
			},
			yaxis: {
				show: true,
				color: '#5e7d8a',
				tickColor: '#eaecec'
			},
			xaxis: {
				show: false
			}
		};
		
		/*Defining Data*/
		var fill_line_chart_data = {
			data: getRandomData(),
		}

		/*Chart Plot*/
		$.plot($("#flot_line_chart_moving"), [fill_line_chart_data], fill_line_chartop);
		
		/*Realtime Data*/
		setInterval(function updateRandom() {
			fill_line_chart_data = getRandomData();
			$.plot($("#flot_line_chart_moving"), [fill_line_chart_data], fill_line_chartop)
		}, 40);	
	}

	/***Line Chart***/
	
/*****E-Charts function start*****/
var echartsConfig = function() { 
	if( $('#e_chart_1').length > 0 ){
		var eChart_1 = echarts.init(document.getElementById('e_chart_1'));
		var option = {
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
			color: ['#00acf0', '#22af47'],		
			legend: {
				show : false,
				data:['Latest transaction price', 'Order'],
				x : 'left',
				y : 'bottom'
			},
			toolbox: {
				show: false,
				feature: {
					dataView: {readOnly: false},
					restore: {},
					saveAsImage: {}
				}
			},
			dataZoom: {
				show: false,
				start: 0,
				end: 100
			},
			xAxis: [
				{
					type: 'category',
					axisLine: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#5e7d8a'
						}
					},
					boundaryGap: true,
					data: (function (){
						var now = new Date();
						var res = [];
						var len = 10;
						while (len--) {
							res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
							now = new Date(now - 2000);
						}
						return res;
					})()
				},
				{
					type: 'category',
					axisLine: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#5e7d8a'
						}
					},
					boundaryGap: true,
					data: (function (){
						var res = [];
						var len = 10;
						while (len--) {
							res.push(len + 1);
						}
						return res;
					})()
				}
			],
			yAxis: [
				{
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
					},
					type: 'value',
					scale: true,
					name: '',
					max: 30,
					min: 0,
					boundaryGap: [0.2, 0.2]
				},
				{
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
					},
					type: 'value',
					scale: false,
					name: '',
					max: 1200,
					min: 0,
					boundaryGap: [0.2, 0.2]
				}
			],
			series: [
				{
					name:'Order',
					type:'bar',
					xAxisIndex: 1,
					yAxisIndex: 1,
					data:(function (){
						var res = [];
						var len = 10;
						while (len--) {
							res.push(Math.round(Math.random() * 1000));
						}
						return res;
					})()
				},
				{
					name:'Latest transaction price',
					type:'line',
					data:(function (){
						var res = [];
						var len = 0;
						while (len < 10) {
							res.push((Math.random()*10 + 5).toFixed(1) - 0);
							len++;
						}
						return res;
					})()
				}
			],
			textStyle: {
				fontStyle: 'normal',
				fontWeight: 'normal',
			},
			
		};
		var app = [];
		app.count = 11;
		setInterval(function (){
			var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
			var data0 = option.series[0].data;
			var data1 = option.series[1].data;
			data0.shift();
			data0.push(Math.round(Math.random() * 1000));
			data1.shift();
			data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

			option.xAxis[0].data.shift();
			option.xAxis[0].data.push(axisData);
			option.xAxis[1].data.shift();
			option.xAxis[1].data.push(app.count++);
			eChart_1.setOption(option);
		}, 2100);
		eChart_1.setOption(option);
		eChart_1.resize();
	}
	if( $('#e_chart_2').length > 0 ){
		var eChart_2 = echarts.init(document.getElementById('e_chart_2'));
		var option1 = {
			title: {
				text: 'Awesome Chart'
			},
			xAxis: {
				data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
			},
			yAxis: {},
			series: [{
				type: 'line',
				data:[220, 182, 191, 234, 290, 330, 310]
			}]
		};
		var myData = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7'];
		var databeast = {
			2006: [389, 259, 262, 324, 232, 176, 196],
			2007: [111, 315, 139, 375, 204, 352, 163],
			2008: [227, 210, 328, 292, 241, 110, 130],
			2009: [100, 350, 300, 250, 200, 150, 100],
			2010: [280, 128, 255, 254, 313, 143, 360],
			2011: [121, 388, 233, 309, 133, 308, 297],
			2012: [200, 350, 300, 250, 200, 150, 100],
			2013: [380, 129, 173, 101, 310, 393, 386],
			2014: [363, 396, 388, 108, 325, 120, 180],
			2015: [300, 350, 300, 250, 200, 150, 100],
		};
		var databeauty = {
			2006: [121, 388, 233, 309, 133, 308, 297],
			2007: [200, 350, 300, 250, 200, 150, 100],
			2008: [380, 129, 173, 101, 310, 393, 386],
			2009: [363, 396, 388, 108, 325, 120, 180],
			2010: [300, 350, 300, 250, 200, 150, 100],
			2011: [100, 350, 300, 250, 200, 150, 100],
			2012: [280, 128, 255, 254, 313, 143, 360],
			2013: [389, 259, 262, 324, 232, 176, 196],
			2014: [111, 315, 139, 375, 204, 352, 163],
			2015: [227, 210, 328, 292, 241, 110, 130],
		};
		var timeLineData = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];
		option1 = {
			baseOption: {
				timeline: {
					show: true,
					axisType: 'category',
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
					autoPlay: true,
					currentIndex: 6,
					playInterval: 1000,
					 checkpointStyle: {
						color: 'transparent',
						borderColor: '#00acf0'
					},
					itemStyle: {
						normal: {
							color: '#00acf0'
						},
						emphasis: {
							color: '#00acf0'
						}
					},
					controlStyle: {
						show:false
					},
					lineStyle: {
						color: '#00acf0'
					},
					label: {
						normal: {
							show: true,
							interval: 'auto',
							formatter: '{value}',
							textStyle: {
								color: '#324148',
								fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
								fontSize: 12
							}
						},
					},
					data: [],
				},
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
			grid: [{
					show: false,
					left: '4%',
					top: '3%',
					bottom: 60,
					containLabel: true,
					width: '46%',
				}, {
					show: false,
					left: '50.5%',
					top: '3%',
					bottom: 60,
					width: '0%',
				}, {
					show: false,
					right: '4%',
					top: '3%',
					bottom: 60,
					containLabel: true,
					width: '46%',
				}, ],

				xAxis: [
					{
					type: 'value',
					inverse: true,
					position: 'top',
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
					},
				}, {
					gridIndex: 1,
					show: false,
				}, {
					gridIndex: 2,
					type: 'value',
					axisLine: {
						show: false,
					},
					axisTick: {
						show: false,
					},
					position: 'top',
					axisLabel: {
						textStyle: {
							color: '#5e7d8a'
						}
					},
					splitLine: {
						lineStyle: {
							color: '#eaecec',
						}
					},
				}, ],
				yAxis: [{
					type: 'category',
					inverse: true,
					position: 'right',
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					splitLine: {
						lineStyle: {
							color: '#eaecec',
						}
					},
					axisLabel: {
						show: false,
					},
					data: myData,
				}, {
					gridIndex: 1,
					type: 'category',
					inverse: true,
					position: 'left',
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: true,
						textStyle: {
							color: '#5e7d8a'
						}

					},
					splitLine: {
						lineStyle: {
							color: '#eaecec',
						}
					},
					data: myData.map(function(value) {
						return {
							value: value,
							textStyle: {
								align: 'center',
							}
						}
					}),
				}, {
					gridIndex: 2,
					type: 'category',
					inverse: true,
					position: 'left',
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: false,
						textStyle: {
							color: '#5e7d8a'
						}

					},
					splitLine: {
						lineStyle: {
							color: '#eaecec',
						}
					},
					data: myData,
				}, ],
				series: [],

			},

			options: [],
		};
		for (var i = 0; i < timeLineData.length; i++) {
			option1.baseOption.timeline.data.push(timeLineData[i]);
			option1.options.push({
			   series: [{
						name: 's1',
						type: 'bar',
						barGap: 20,
						barWidth: 20,
						label: {
							normal: {
								show: false,
							},
							emphasis: {
								show: true,
								position: 'left',
								offset: [0, 0],
								textStyle: {
									color: '#fff',
									fontSize: 14,
								},
							},
						},
						itemStyle: {
							normal: {
								color: '#22af47',
							},
							emphasis: {
								color: '#22af47',
							},
						},
						data: databeast[timeLineData[i]],
					},


					{
						name: 's2',
						type: 'bar',
						barGap: 20,
						barWidth: 20,
						xAxisIndex: 2,
						yAxisIndex: 2,
						label: {
							normal: {
								show: false,
							},
							emphasis: {
								show: true,
								position: 'right',
								offset: [0, 0],
								textStyle: {
									color: '#fff',
									fontSize: 14,
								},
							},
						},
						itemStyle: {
							normal: {
								color: '#00acf0',
							},
							emphasis: {
								color: '#00acf0',
							},
						},
						data: databeauty[timeLineData[i]],
					}
				]
			});
		}
		eChart_2.setOption(option1);
		eChart_2.resize();
	}
	if( $('#e_chart_3').length > 0 ){
		var eChart_3 = echarts.init(document.getElementById('e_chart_3'));
		var option3 = {
			timeline: {
				data: ['91', '92', '93', '94', '95', '96', '97', '98', '99', '91'],
				axisType: 'category',
				show: false,
				autoPlay: true,
				playInterval: 1000,
			},
			options: [{
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
				calculable: true,
				grid: {
					top: '3%',
					left: '3%',
					right: '3%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: [{
					'type': 'category',
					axisLabel: {
						textStyle: {
							color: '#324148',
							fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
							fontSize: 12
						}	
					},
					axisLine: {
						show:false
					},
					splitLine:{
						show:false
					},
					'data': [
						'x1', ' x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8'
					]
				}],
				yAxis: [{
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
				}, {
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
				series: [{
					'name': 'tq',
					'yAxisIndex': 1,
					'type': 'line',
					'data': [5, 6, 8, 28, 8, 24, 11, 16],
					symbolSize: 6,
					itemStyle: {
						normal: {
							color: '#00acf0'
						}
					},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#00acf0'
							}, {
								offset: 1,
								color: '#22af47'
							}])
						}
					},
					label: {
						normal: {
							show: true,
							position: 'top',
							formatter: '{c}',
							color: '#5e7d8a',
							fontStyle: 'normal',
							fontWeight: 'normal',
							fontFamily: "inherit",
							fontSize: 12
						}
					},
				}]
			}, {
				series: [{
					'data': [45, 43, 64, 134, 188, 43, 109, 12]
				}]
			}, {
				series: [{
					'data': [110, 32, 111, 176, 73, 59, 181, 9]
				}]
			}, {
				series: [{
					'data': [94, 37, 64, 55, 56, 41, 70, 17]
				}]
			}, {
				series: [{
					'data': [5, 6, 5, 28, 8, 24, 11, 16]
				}]
			}, {
				series: [{
					'data': [45, 34, 64, 134, 188, 43, 109, 12]
				}]
			}, {
				series: [{
					'data': [5, 6, 34, 28, 8, 24, 11, 16]
				}]
			}, {
				series: [{
					'data': [94, 37, 64, 55, 56, 41, 70, 17]
				}]
			}, {
				series: [{
					'data': [45, 40, 64, 134, 188, 43, 109, 12]
				}]
			}, {
				series: [{
					'data': [5, 6, 10, 28, 8, 24, 11, 16]
				}]
			}, ]
		};
		eChart_3.setOption(option3);
		eChart_3.resize();
	}
	if( $('#e_chart_4').length > 0 ){
		var eChart_4 = echarts.init(document.getElementById('e_chart_4'));
		var option4 = {
			xAxis: {
				data: ['a', 'b', 'c', 'd'],
				axisTick: {show: false},
				axisLine: {
					show:false
				},
				axisLabel: {
					formatter: 'barGap: \'-100%\'',
					textStyle: {
						color: '#324148',
						fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
						fontSize: 12
					}
				}
				
			},
			yAxis: {
				splitLine: {show: false},
				axisLine: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#324148',
						fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
						fontSize: 12
					}
				}
			},
			animationDurationUpdate: 1200,
			series: [{
				type: 'bar',
				itemStyle: {
					normal: {
						color: '#f742aa',
						shadowBlur: 5,
						shadowColor: 'rgba(0, 0, 0, .2)'
					}
				},
				silent: true,
				barWidth: 20,
				barGap: '-100%', // Make series be overlap
				data: [60, 60, 60, 60]
			}, {
				type: 'bar',
				itemStyle: {
					normal: {
						color: '#635bd6',
						shadowBlur: 5,
						shadowColor: 'rgba(0, 0, 0, .5)'
					}
				},
				barWidth: 40,
				z: 10,
				data: [45, 60, 13, 25]
			}]
		};

		var barGaps = ['30%', '-100%'];
		var loopIndex = 0;

		setInterval(function () {
			var barGap = barGaps[loopIndex];

			eChart_4.setOption({
				xAxis: {
					axisLabel: {
						formatter: 'barGap: \'' + barGap + '\''
					}
				},
				series: [{
					barGap: barGap
				}]
			});
			loopIndex = (loopIndex + 1) % barGaps.length;

		}, 2000);
		
		eChart_4.setOption(option4);
		eChart_4.resize();
	}

}
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