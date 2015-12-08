function showGraph(){
	//document.getElementById("back").style.display="none";

	document.getElementById("backtodash").style.display="block";

$(function () {

    //$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=us-population-density.json&callback=?', function (data) {
	  $.get('/getRegionMapData', function (data) {

		  //alert(data[0].code);	  
        /* Make codes uppercase to match the map data
        $.each(data, function () {
            this.code = this.code.toUpperCase();
        });*/

        // Instanciate the map
        $('#container').highcharts('Map', {

            chart : {
                borderWidth : 1,
                backgroundColor: 'white '
            },

            title : {
                text : 'Basic EHR Adoption Rate'
            },

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
              
                floating: true,
                verticalAlign: 'top',
                y: 25
            },

            mapNavigation: {
                enabled: true
            },

            colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: '#F9FCFF	',
                maxColor: '#0033CC',
                stops: [
                    [0, ' #F9FCFF'],
                    [0.72, '#D0E6FF'],
                    [1, '#0033CC']
                ]
            },
            plotOptions: {
               
            	 series: {
                     cursor: 'pointer',
                     events: {
                         click: function (e) {
                             //alert(e.point.code);
							
                             drawPieChart(e.point.code);
                             
                         }

                        
                     }
                 }
             
            },


            series : [{
                animation: {
                    duration: 1000
                },
                data : data,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: 'black',
                    format: '{point.code}'
                },
                name: 'Basic EHR adoption Rate',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}'
                }
            }]
        });
    });
});
    
}
<!--PieChart -->
function drawPieChart(rCode){

	document.getElementById("backtodash").style.display="none";
	document.getElementById("back").style.display="block";
	document.getElementById("back").align="right";
	

$(function () {
	 $.get('/getPieData/'+rCode, function (data) {
    
    var avg3 = (data[3].primaryCare+data[3].rural+data[3].smallPractice)/3;
    var avg2 = (data[2].primaryCare+data[2].rural+data[2].smallPractice)/3;
    var avg1 = (data[1].primaryCare+data[1].rural+data[1].smallPractice)/3;
    var avg0 = (data[0].primaryCare+data[0].rural+data[0].smallPractice)/3;  

    var pAvg = (data[3].primaryCare+data[2].primaryCare+data[1].primaryCare+data[0].primaryCare)/4;
    var rAvg = (data[3].rural+data[2].rural+data[1].rural+data[0].rural)/4;
    var sAvg = (data[3].smallPractice+data[2].smallPractice+data[1].smallPractice+data[0].smallPractice)/4;
    
     
    $('#container').highcharts({
        title: {
            text: 'Combination chart to depict yearly adoption of EHR in '+data[0].region
        },
        xAxis: {
            categories: ['2010', '2011', '2012','2013']
        },
        labels: {
            items: [{
                html: 'Yearly EHR Adoption',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Primary Care',
            data: [data[3].primaryCare, data[2].primaryCare, data[1].primaryCare, data[0].primaryCare]
        }, {
            type: 'column',
            name: 'Rural',
            data: [data[3].rural, data[2].rural, data[1].rural, data[0].rural]
        }, {
            type: 'column',
            name: 'Small Practices',
            data: [data[3].smallPractice,data[2].smallPractice, data[1].smallPractice,data[0].smallPractice]
        }, {
            type: 'spline',
            name: 'Average',
            data: [avg3, avg2, avg1, avg0],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Average Adoption',
            data: [{
                name: 'Primary Care',
                y: pAvg,
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: 'Rural',
                y: rAvg,
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: 'Small Practices',
                y: sAvg,
                color: Highcharts.getOptions().colors[2] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
});
});

}

function showGraphAgain(){
document.getElementById("back").style.display="none";
	showGraph();
}
