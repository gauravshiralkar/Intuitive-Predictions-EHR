var data;

function getData() {
	$.get("/getStackedData", function(results) {
		data = results;
		console.log(results);
		setTimeout('showGraph()', 100);
	});
}
function showGraph(){
var chart = AmCharts.makeChart("chartdiv", {
    "theme": "none",
    "type": "serial",
    "dataProvider": data,
    "valueAxes": [{
        "stackType": "3d",
        "unit": "%",
        "position": "left",
        "title": "Percent of Hospitals",
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "EHR adoption in [[category]] with Clinical Notes: <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "WithNotes",
        "type": "column",
        "valueField": "WithNotes"
    }, {
        "balloonText": "EHR adoption in [[category]] without Clinical Notes: <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "WithoutNotes",
        "type": "column",
        "valueField": "WithoutNotes"
    }],
    "titles": [
       		{
       			"text": "Trends in EHR Adoption showing increased use of advanced functionality"
       		
       		}
       	],
    "plotAreaFillAlphas": 0.1,
    "depth3D": 60,
    "angle": 30,
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start"
    },
    "export": {
    	"enabled": true
     }
});
jQuery('.chart-input').off().on('input change',function() {
	var property	= jQuery(this).data('property');
	var target		= chart;
	chart.startDuration = 0;

	if ( property == 'topRadius') {
		target = chart.graphs[0];
      	if ( this.value == 0 ) {
          this.value = undefined;
      	}
	}

	target[property] = this.value;
	chart.validateNow();
});
}