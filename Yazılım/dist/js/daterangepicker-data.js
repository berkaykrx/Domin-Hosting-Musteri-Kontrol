/* Daterange Init*/

$(function() {
  "use strict";
	/* Date range with a callback*/
	$('input[name="daterange"]').daterangepicker({
		opens: 'left',
		"cancelClass": "btn-secondary",
	}, function(start, end, label) {
		console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
	});
	
	/* Date range picker with times*/
	$('input[name="datetimes"]').daterangepicker({
		timePicker: true,
		startDate: moment().startOf('hour'),
		endDate: moment().startOf('hour').add(32, 'hour'),
		"cancelClass": "btn-secondary",
		locale: {
		  format: 'M/DD hh:mm A'
		}
	});
	
	/* Single table*/
	$('input[name="birthday"]').daterangepicker({
		singleDatePicker: true,
		showDropdowns: true,
		minYear: 1901,
		"cancelClass": "btn-secondary",
		maxYear: parseInt(moment().format('YYYY'),10)
		}, function(start, end, label) {
		var years = moment().diff(start, 'years');
		alert("You are " + years + " years old!");
	});
	
	/* Limit selectable dates*/
	$('.input-limit-datepicker').daterangepicker({
		format: 'MM/DD/YYYY',
		minDate: '06/01/2018',
		maxDate: '06/30/2018',
		buttonClasses: ['btn', 'btn-sm'],
		"cancelClass": "btn-secondary",
		dateLimit: {
			days: 6
		}
	});
	
	/* Predefind range*/
	var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }
	
    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    },cb);

    cb(start, end);
	
	/* Time picker*/
	$('.input-timepicker').daterangepicker({
		timePicker: true,
		timePicker24Hour: true,
		timePickerIncrement: 1,
		timePickerSeconds: true,
		locale: {
			format: 'HH:mm:ss'
		}
	}).on('show.daterangepicker', function (ev, picker) {
		picker.container.find(".calendar-table").hide();
	});

});