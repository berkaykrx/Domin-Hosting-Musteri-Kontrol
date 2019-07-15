/*Owl Init*/
jQuery(document).ready(function($) {
	"use strict";
	
	/*owl carousel*/
	$("#owl_demo_1").owlCarousel({
		items : 1, 
	});
	$('#owl_demo_2').owlCarousel({
		margin:20,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			800:{
				items:4
			},
			
		}
	});
	$('#owl_demo_3').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
		stagePadding: 50,
        video:true,
		videoWidth: 267,
		videoHeight: 150,
		autoWidth:true,
		lazyLoad:false,
        center:true,
		responsive:{
            480:{
                items:2
            },
            600:{
                items:4
            }
        }
    });
	$('#owl_demo_4').owlCarousel({
		center: true,
		loop:true,
		margin:30,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			800:{
				items:3
			},
			
		}
	});
	$('#owl_demo_5').owlCarousel({
		center: true,
		loop:false,
		margin:30,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			800:{
				items:3
			},
			
		}
	});
	$('#owl_demo_6').owlCarousel({
		loop:true,
		margin:0,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			}
		}
	});
});
$(window).on('load', function () {
	setTimeout(function(){
		$('#tweets_fetch').owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			responsiveClass:true,
			autoHeight:true,
			autoplayTimeout:4000,
			responsive:{
				0:{
					items:1
				}
			}
		});
	},2000);
});
