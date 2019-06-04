$(document).ready(function(){
		$.getJSON('https://api.sheety.co/8e7bb733-230c-4d61-a9ce-18e0350a15e4', function(data) {
			var template = Handlebars.compile($('#item-template-desk').html())
			$('#items-desk').html(template(data));
		})
		$.getJSON('https://api.sheety.co/8e7bb733-230c-4d61-a9ce-18e0350a15e4', function(data) {
			var template = Handlebars.compile($('#item-template-mobile').html())
			$('#items-mobile').html(template(data));
		})
	})


function FetchTable() {
		    $('#bed-table-sort').tablesorter({
				tableClass: 'tablesorter',
			    cssAsc: "tablesorter-headerSortUp",
			    cssDesc: "tablesorter-headerSortDown",
			    cssHeader: "tablesorter-header",
			    cssHeaderRow: "tablesorter-headerRow",
			    cssIcon: "tablesorter-icon",
			    cssChildRow: "tablesorter-childRow",
			    cssInfoBlock: "tablesorter-infoOnly",
			    cssProcessing: "tablesorter-processing",
			})
		};
setTimeout(FetchTable,1450);

if (location.protocol !== "https:") {location.protocol = "https:";}

