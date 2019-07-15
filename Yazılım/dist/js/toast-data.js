/*Toast Init*/


$(document).ready(function() {
	"use strict";
	
	$.toast({
		heading: 'Well done!',
		text: '<p>You have successfully completed level 1.</p><button class="btn btn-primary btn-sm mt-10">Play again</button>',
		position: 'top-right',
		loaderBg:'#00acf0',
		class: 'jq-toast-primary',
		hideAfter: 3500, 
		stack: 6,
		showHideTransition: 'fade'
	});
	
	$('.tst1').on('click',function(e){
	    $.toast().reset('all'); 
		$("body").removeAttr('class');
		$.toast({
            text: '<i class="jq-toast-icon ti-twitter-alt"></i><p>John! Recently joined twitter.</p>',
			position: 'top-left',
			loaderBg:'#00acf0',
			class: 'jq-has-icon jq-toast-info',
			hideAfter: 3500, 
			stack: 6,
			showHideTransition: 'fade'
        });
		return false;
    });

	$('.tst2').on('click',function(e){
        $.toast().reset('all');
		$("body").removeAttr('class');
		$.toast({
            heading: 'Are you sure you want to delete this file?',
			text: '<i class="jq-toast-icon ti-alert"></i><button class="btn btn-secondary btn-sm mt-10 mr-5">yes</button><button class="btn btn-primary btn-sm mt-10">cancel</button>',
			position: 'top-right',
			loaderBg:'#00acf0',
			class: 'jq-has-icon jq-toast-warning',
			hideAfter: 3500, 
			stack: 6,
			showHideTransition: 'fade'
        });
		return false;
	});
	
	$('.tst3').on('click',function(e){
        $.toast().reset('all');
		$("body").removeAttr('class');
		$.toast({
            text: '<i class="jq-toast-icon ti-location-pin"></i><p>John Doe started following your board.</p>',
			position: 'bottom-left',
			loaderBg:'#00acf0',
			class: 'jq-has-icon jq-toast-success',
			hideAfter: 3500, 
			stack: 6,
			showHideTransition: 'fade'
          });
		return false;  
	});

	$('.tst4').on('click',function(e){
		$.toast().reset('all');
		$("body").removeAttr('class');
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
		return false;
    });
	
	$('.tst5').on('click',function(e){
	    $.toast().reset('all');   
		$("body").removeAttr('class');
		$.toast({
            heading: 'Well done!',
			text: '<p>You have successfully completed level 1.</p><button class="btn btn-primary btn-sm mt-10">Play again</button>',
			position: 'top-left',
			loaderBg:'#00acf0',
			class: 'jq-toast-primary',
			hideAfter: 3500, 
			stack: 6,
			showHideTransition: 'fade'
        });
		return false;
    });
	
	$('.tst6').on('click',function(e){
		$.toast().reset('all');
		$("body").removeAttr('class');
		$.toast({
            heading: 'Well done!',
			text: '<p>You have successfully completed level 1.</p><button class="btn btn-primary btn-sm mt-10">Play again</button>',
			position: 'top-right',
			loaderBg:'#00acf0',
			class: 'jq-toast-primary',
			hideAfter: 3500, 
			stack: 6,
			showHideTransition: 'fade'
        });
		return false;
    });
	
	$('.tst7').on('click',function(e){
		$.toast().reset('all');
		$("body").removeAttr('class');
		$.toast({
           heading: 'Well done!',
			text: '<p>You have successfully completed level 1.</p><button class="btn btn-primary btn-sm mt-10">Play again</button>',
			position: 'bottom-left',
			loaderBg:'#00acf0',
			class: 'jq-toast-primary',
			hideAfter: 3500, 
			stack: 6,
			showHideTransition: 'fade'
        });
		return false;
    });
	
	$('.tst8').on('click',function(e){
	    $.toast().reset('all');   
		$("body").removeAttr('class');
		$.toast({
            heading: 'Well done!',
			text: '<p>You have successfully completed level 1.</p><button class="btn btn-primary btn-sm mt-10">Play again</button>',
			position: 'bottom-right',
			loaderBg:'#00acf0',
			class: 'jq-toast-primary',
			hideAfter: 3500, 
			stack: 6,
			showHideTransition: 'fade'
        });
		return false;
	});
	
	$('.tst9').on('click',function(e){
	    $.toast().reset('all');   
		$("body").removeAttr('class').removeClass("bottom-center-fullwidth").addClass("top-center-fullwidth");
		$.toast({
			text: '<i class="jq-toast-icon ti-face-smile"></i><p>Welcome to Prototip Dashboard.</p>',
			position: 'top-center',
			loaderBg:'#00acf0',
			class: 'jq-has-icon jq-toast-dark',
			hideAfter: 3500, 
			stack: 6,
			showHideTransition: 'fade'
        });
		return false;
	});
	
	$('.tst10').on('click',function(e){
	    $.toast().reset('all');
		$("body").removeAttr('class').addClass("bottom-center-fullwidth");
		$.toast({
            text: '<i class="jq-toast-icon ti-face-smile"></i><p>Welcome to Prototip Dashboard.</p>',
			position: 'bottom-center',
			loaderBg:'#00acf0',
			class: 'jq-has-icon jq-toast-dark',
			hideAfter: 3500, 
			stack: 6,
			showHideTransition: 'fade'
        });
		return false;
	});
});
          
