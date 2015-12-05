
$(document).ready(function(){
	$('#f1').typeahead({
    	valueKey: 'name',
        name: 'typeahead',
        remote: 'http://localhost:3000/typeAhead/patientAddressStreet/patientaddress?key=%QUERY',
        limit: 10 
    });
});

