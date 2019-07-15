/*Rangeslider Init*/
$(document).ready(function() {
	"use strict";
	$(".range-slider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 100,
		from: 50,
		keyboard: true,
		onStart: function (data) {
			console.log("onStart");
		},
		onChange: function (data) {
			console.log("onChange");
		},
		onFinish: function (data) {
			console.log("onFinish");
		},
		onUpdate: function (data) {
			console.log("onUpdate");
		}
	});
	
	$(".range-slider-1").ionRangeSlider({
		type: "double",
		min: 1000,
		max: 5000,
		from: 2000,
		to: 4000
	});
	
	$(".range-slider-2").ionRangeSlider({
		type: "double",
		min: 0,
		max: 10000,
		step: 500,
		grid: true,
		grid_snap: true
	});
 
 });