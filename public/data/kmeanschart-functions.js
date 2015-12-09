



function showGraph(){

	$("#bubble").on('click', function() {
		// alert ("inside onclick");
		showGraphBubble();
	});

	$("#line").on('click', function() {
		// alert ("inside onclick");
		showGraph();
	});

	var clusterParam = document.getElementById("cluster").value;
	console.log(clusterParam);
	var parameter;
	if(clusterParam=="Insurance Provider Id")
	{
		parameter = "insuranceDetailsProviderId";
	}
	else if(clusterParam=="Patient Address Zip")
	{
		parameter = "patientAddressZip";
	}
	else if(clusterParam=="Diagnosis Code")
	{
		parameter = "DiagnosisCode";
	}
	else if (clusterParam=="Procedure Code")
	{
		parameter = "ProcedureCode";
	}

	else if (clusterParam=="Age")
	{
		parameter = "age";
	}
	$.get('/getClustersOne/'+parameter, function (data) {

		var data = data;



		$(function () {
			$('#container').highcharts({
				title: {
					text: 'Centroids of clusters for '+clusterParam,
					x: -20 //center
				},
				
				xAxis: {
					categories: ['Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4', 'Cluster 5', 'Cluster 6',
					             'Cluster 7', 'Cluster 8', 'Cluster 9', 'Cluster 10']
				},

				yAxis: {
					title: {
						text: 'Centroids of Clusters'
					},
					plotLines: [{
						value: 0,
						width: 1,
						color: '#808080'
					}]
				},

				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle',
					borderWidth: 0
				},
				series: [{
					name: clusterParam,
					data: [data[0].centroid,data[1].centroid, data[2].centroid,data[3].centroid,data[4].centroid,data[5].centroid
					       ,data[6].centroid,data[7].centroid, data[8].centroid, data[9].centroid]
				}]
			});
		});
	});
}



function showGraphBubble()
{
	var clusterParam = document.getElementById("cluster").value;
	console.log(clusterParam);

	var parameter;
	if(clusterParam=="Insurance Provider Id")
	{
		parameter = "insuranceDetailsProviderId";
	}
	else if(clusterParam=="Patient Address Zip")
	{
		parameter = "patientAddressZip";
	}
	else if(clusterParam=="Diagnosis Code")
	{
		parameter = "DiagnosisCode";
	}
	else if (clusterParam=="Procedure Code")
	{
		parameter = "ProcedureCode";
	}
	else if (clusterParam=="Age")
	{
		parameter = "age";
	}

	$.get('/getClustersOne/'+parameter, function (data) {
		var centroid;
		var clusterSize;
		//console.log("inside bubble function");
		//console.log(data[0].centroid,data[1].centroid,data[2].centroid,data[3].centroid,data[0].cluster.length);

		$(function () {

			var centroid1, centroid2, centroid3,centroid4,centroid5,centroid6,centroid7,centroid8,centroid9,centroid10;
			var clusterSize1, clusterSize2, clusterSize3,clusterSize4,clusterSize5,clusterSize6,clusterSize7,clusterSize8,clusterSize9,
			clusterSize10;
			centroid1= $.parseJSON(data[0].centroid);
			console.log(centroid1);
			centroid2= $.parseJSON(data[1].centroid);
			centroid3= $.parseJSON(data[2].centroid);
			centroid4= $.parseJSON(data[3].centroid);
			centroid5= $.parseJSON(data[4].centroid);
			centroid6= $.parseJSON(data[5].centroid);
			centroid7= $.parseJSON(data[6].centroid);
			centroid8= $.parseJSON(data[7].centroid);
			centroid9= $.parseJSON(data[8].centroid);
			centroid10= $.parseJSON(data[9].centroid);

			clusterSize1 = $.parseJSON(data[0].cluster.length);
			clusterSize2 = $.parseJSON(data[1].cluster.length);
			clusterSize3 = $.parseJSON(data[2].cluster.length);
			clusterSize4 = $.parseJSON(data[3].cluster.length);
			clusterSize5 = $.parseJSON(data[4].cluster.length);
			clusterSize6 = $.parseJSON(data[5].cluster.length);
			clusterSize7 = $.parseJSON(data[6].cluster.length);
			clusterSize8 = $.parseJSON(data[7].cluster.length);
			clusterSize9 = $.parseJSON(data[8].cluster.length);
			clusterSize10 = $.parseJSON(data[9].cluster.length);


			$('#container').highcharts({
				
				theme :{
						   colors: ["#f45b5b", "#8085e9", "#8d4654", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
						      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"]
				},

				chart: {
					type: 'bubble'
				},

				title: {
					text: 'Clusters and centroids for '+ clusterParam
				},

				xAxis: {
					min: 0,
					//max: 100
					
				
				
					title: {
		                text: 'Clusters'
		            },
				},

				yAxis: {
					title: {
		                text: 'Centroids'
		            },

				},
				plotOptions: {
				    bubble: {
				        color: '#f45b5b',
				       
				    }
				},

				series: [{

					title: 
						{
						text:clusterParam,
						},
						
					data: [
					       { x: 10, y:centroid1, z: clusterSize1},
					       { x: 20, y:centroid2, z: clusterSize2},
					       { x: 30, y:centroid3, z: clusterSize3},
					       { x: 40, y:centroid4, z: clusterSize4},
					       { x: 50, y:centroid5, z: clusterSize5},
					       { x: 60, y:centroid6, z: clusterSize6},
					       { x: 70, y:centroid7, z: clusterSize7},
					       { x: 80, y:centroid8, z: clusterSize8},
					       { x: 90, y:centroid9, z: clusterSize9},
					       { x: 100, y:centroid10, z: clusterSize10} 
					       ]
				}],



			});
		});
	});



}