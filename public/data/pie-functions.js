function showGraph(){
	
	document.getElementById("backtodash").style.display="block";
	$(function () {

	    //$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=us-population-density.json&callback=?', function (data) {
		  $.get('/getPie', function (data) {
			  
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Trends in EHR Adoption by Rural and Small Hospitals in U.S'
            	
        },
        subtitle: {
            text: 'Click on pie sections to view the EHR Adoption in each state in U.S'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                events: {
                    click: function (e) {
                      //  alert(e.point.name);
						
                       drawMap(e.point.name);
                    }

                   
                },
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Comprehensive',
                y: data[0].comprehensive
            }, {
                name: 'Rural Hospitals',
                y: data[0].ruralHospitals,
                sliced: true,
                selected: true
            }, {
                name: 'Small Hospitals',
                y: data[0].smallHospitals
            }]
        }]
    });
});
});

    
}

function drawMap(type){
	
	document.getElementById("backtodash").style.display="none";
	document.getElementById("back").style.display="block";
	document.getElementById("back").align="right";
	
	
	$(function () {
		 $.get('/getMapData/'+type, function (data) {


			
			    
			 $('#container').highcharts('Map', {

		            chart : {
		                borderWidth : 1,
		                backgroundColor: 'white '
		            },
		            
		            

		            title : {
		                text : 'Trends in EHR Adoption Rate'
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
		                    [0.67, '#D0E6FF'],
		                    [1, '#0033CC']
		                ]
		            },
		            plotOptions: {
		               
		            	 series: {
		                     cursor: 'pointer',
		                    
		                     
		                 }
		             
		            },
		            
		           
		            yAxis: {        
		                labels: {
		                    formatter: function() {
		                        if(this.value === 0){
		                            return 1;
		                        } else {
		                            return this.value;
		                        }
		                    }
		                }
		            },


		            series : [{
		                animation: {
		                    duration: 1000
		                },
		                compare: 'percent',
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
function showGraphAgain(){
	document.getElementById("back").style.display="none";
	showGraph();
}



