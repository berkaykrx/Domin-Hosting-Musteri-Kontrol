/*FormWizard Init*/
$(function(){
	"use strict";
	
	/* Basic Wizard Init*/
	if($('#example-basic').length >0)
		$("#example-basic").steps({
			headerTag: "h3",
			bodyTag: "section",
			transitionEffect: "fade",
			autoFocus: true,
			titleTemplate: "#title#" 
		});
	
	/* Input spinner Init*/	
	setTimeout(function(){
		$("input.normal").inputSpinner({groupClass: "input-group-sm w-100p",buttonsClass: "btn-outline-light"});
	},100);	
});
		