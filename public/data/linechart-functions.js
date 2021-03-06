function showGraph(){
	 $.get('/getLineData', function (data) {
			
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Percentage of Physicians, Physician Assistants, and Nurse Practitioners that have Demonstrated <br> Meaningful Use of CEHRT and or AIU any EHR'
        },
        
        xAxis: {
            categories:[data[0].region_code, data[1].region_code,data[2].region_code,data[3].region_code,data[4].region_code,data[5].region_code
                        ,data[6].region_code,data[7].region_code,data[8].region_code,data[9].region_code,data[10].region_code,data[11].region_code
                        ,data[12].region_code,data[13].region_code,data[14].region_code,data[15].region_code]
        
        
        },
        yAxis: {
            title: {
                text: 'Percentage (%)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Dmonstrated Meaningful use of CEHRT and or AIU any EHR',
            data: [data[0].p,data[1].p,data[2].p,data[3].p,data[4].p,data[5].p,data[6].p,data[7].p,data[8].p,data[9].p,data[10].p,data[11].p,data[12].p,
                   data[13].p,data[14].p]
        }, {
            name: 'Dmonstrated Meaningful use of CEHRT',
            data: [data[0].q,data[1].q,data[2].q,data[3].q,data[4].q,data[5].q,data[6].q,data[7].q,data[8].q,data[9].q,data[10].q,data[11].q,data[12].q,
                   data[13].q,data[14].q]
        }]
    });
});
	 });
}