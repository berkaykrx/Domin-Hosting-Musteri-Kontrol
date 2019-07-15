/*DataTable Init*/

"use strict"; 

$(document).ready(function() {
	$('#fmapp_table_view').DataTable({
		responsive: true,
		language: { search: "",searchPlaceholder: "Search" },
		"bPaginate": false,
		"info":     false,
		"bFilter":     false,
	});
} );