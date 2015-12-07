
	$j('#pname').typeahead({
    	valueKey: 'pname',
        name: 'pname',
        remote: 'http://localhost:3000/typeAhead/patientFullName/scratch?key=%QUERY',
        limit: 10 
    });
	
	$j('#paddress').typeahead({
    	valueKey: 'paddress',
        name: 'paddress',
        remote: 'http://localhost:3000/typeAhead/patientAddressStreet/scratch?key=%QUERY',
        limit: 10 
    });
	
	$j('#pcity').typeahead({
    	valueKey: 'pcity',
        name: 'pcity',
        remote: 'http://localhost:3000/typeAhead/patientAddressCity/scratch?key=%QUERY',
        limit: 10 
    });
	
	$j('#pzip').typeahead({
    	valueKey: 'pzip',
        name: 'pzip',
        remote: 'http://localhost:3000/typeAhead/patientAddressZip/scratch?key=%QUERY',
        limit: 10 
    });
	
