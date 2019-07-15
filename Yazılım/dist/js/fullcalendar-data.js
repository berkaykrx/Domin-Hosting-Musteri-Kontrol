/*FullCalendar Init*/
$(document).ready(function() {
	'use strict';
	var drag =  function() {
        $('.calendar-event').each(function() {

        // store data so the calendar knows to render an event upon drop
        $(this).data('event', {
            title: $.trim($(this).find('p').text()), // use the element's text as the event title
            stick: true // maintain when user navigates (see docs on the renderEvent method)
        });

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 1111999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });
    });
    };
    
    var removeEvent =  function() {
		$(document).on('click','.remove-calendar-event',function(e) {
			$(this).closest('.calendar-event').fadeOut();
        return false;
    });
    };
    $(document).on('click','#add_event',function(e) {
		$('<div class="calendar-event alert alert-success alert-dismissible fade show"><p>' + $('#inputEvent').val() + '</p><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>').insertAfter(".calendar-event:last-child");
		$(this).parents('.modal').find('.close').trigger('click');
		return false;
	});
  
    
    
    drag();
    removeEvent();
    
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
	
	$('#calendar').fullCalendar({
	themeSystem: 'bootstrap4',
	  customButtons: {
		calendarSidebar: {
			text: 'icon',
		}
	},
	header: {
	left: 'calendarSidebar ,today',
	center: 'prev,title,next',
	right: 'month,agendaWeek,agendaDay,listMonth'
	},
	droppable: true,	
	editable: true,
	height: 'parent',
	eventLimit: true, // allow "more" link when too many events
	windowResizeDelay:500,
	events: [{
				title: 'Conference',
				start: '2019-01-25'
			},
			{
              title: 'Long Event',
              start: '2018-12-07',
              end: '2018-12-10'
            },
			{
              id: 999,
              title: 'Repeating Event',
              start: '2019-01-09T16:00:00'
            },
            {
              id: 999,
              title: 'Repeating Event',
              start: '2019-01-16T16:00:00'
            },
			{
				title: 'Meetings',
				start: '2019-01-27'
			},
			{
				title: 'Sports',
				start: '2019-01-01'
			},
			{
				title: 'Party',
				start: '2019-01-22'
			},
			{
				title: 'Travel',
				start: '2019-01-10'
			},
			{
				title: 'Conference',
				start: '2018-11-25'
			},
			{
              title: 'Long Event',
              start: '2018-11-07',
              end: '2018-11-11'
            },
			{
              id: 999,
              title: 'Repeating Event',
              start: '2018-11-09T16:00:00'
            },
            {
              id: 999,
              title: 'Repeating Event',
              start: '2018-12-16T16:00:00'
            },
			{
				title: 'Meetings',
				start: '2018-12-27'
			},
			{
				title: 'Sports',
				start: '2018-12-01'
			},
			{
				title: 'Party',
				start: '2018-12-22'
			},
			{
				title: 'Travel',
				start: '2018-12-11'
			}
		],
		drop: function() {
			if($("#remove_event").is(':checked'))
				$(this).remove();
		}
	});
	setTimeout(function(){
		$('.fc-left .fc-calendarSidebar-button').attr("id","calendarapp_sidebar_move").html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>');
		$('.fc-left .fc-today-button').removeClass('btn-primary').addClass('btn-outline-secondary btn-sm');
		$('.fc-center .btn').removeClass('btn-primary').addClass('btn-outline-light btn-sm');
		$('.fc-right .btn-group').addClass('btn-group-sm');
		$('.fc-right .btn').removeClass('btn-primary').addClass('btn-outline-secondary');
	},100);
	
});