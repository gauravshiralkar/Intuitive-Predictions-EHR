function showGraph(){
	

	    //$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=us-population-density.json&callback=?', function (data) {
		  $.get('/getTree', function (data) {


			  $(function () {
				    $('#container').highcharts({
				        colorAxis: {
				            minColor: '#d6f5f5',
				            maxColor: Highcharts.getOptions().colors[7]
				        },
				        plotOptions: {
				               
			            	 series: {
			                     cursor: 'pointer',
			                     events: {
			                         click: function (e) {
			                             //alert(e.point.name);
										
			                             getTreeData(e.point.name);
			                         }

			                        
			                     }
			                 }
			             
			            },
				        series: [{
				            type: 'treemap',
				            layoutAlgorithm: 'squarified',
				            data: [{
				                name: data[2].shortDescription,
				                value: data[2].count,
				                colorValue: 6
				         
				            }, {
				            	 name: data[3].shortDescription,
					             value: data[3].count,
					             colorValue: 5
				          
				            }, {
				            	name: data[0].shortDescription,
					            value: data[0].count,
					            colorValue: 4
				             
				            }, {
				            	name: data[1].shortDescription,
					            value: data[1].count,
					            colorValue: 3
				               
				            }, {
				            	name: data[4].shortDescription,
					            value: data[4].count,
					            colorValue: 2
				           
				            }]
				        }],
				        title: {
				            text: 'Tree Map displaying types of ailments'
				        },
				        subtitle: {
			                text: 'Click on ailments to view their procedure codes'
			            }
				    });
				});




		  });
	
	
	}	

function getTreeData(name){
	

    document.getElementById("backtodash").align="right";	
    
    
    document.getElementById("container").style.float="left";
    document.getElementById("aParent").style.clear="none";
 
	document.getElementById("tableDiv").style.display= "block";
	document.getElementById("tableDiv").style.float= "right";
	
	

	document.getElementById("tableDiv").innerHTML = "";
	$(function () {
		 $.get('/getTreeData/'+name, function (data) {

			 var c, r, t;
			  
		 	 t = document.createElement('table');
		 	
		 	 	 	 var ctr=0;
		 	 $.each(data,function(){
			 	 //alert("inside"+e);
			 if (ctr==0){
			 	 r = t.insertRow(ctr); 
			     c = r.insertCell(0);
			     c.innerHTML = "Disease Description".bold();
			     c = r.insertCell(1);
			     c.innerHTML = "Procedure Codes".bold();
			     ctr++;
			 }

			 else
				 {

				 r = t.insertRow(ctr); 
			     c = r.insertCell(0);
			     c.innerHTML = data[ctr-1].ShortDescription;
			     c = r.insertCell(1);
			     c.innerHTML = data[ctr-1].procedureCodes;
			     ctr++;
				 }
		 	});
		 	document.getElementById("tableDiv").appendChild(t);
		 });
	});
}
