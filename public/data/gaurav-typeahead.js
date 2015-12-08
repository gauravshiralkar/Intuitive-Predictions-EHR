
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
	$j('#diagkey').typeahead({
    	valueKey: 'diagcode',
        name: 'diagcode',
        remote: 'http://localhost:3000/typeAhead/DiagnosticDesc/diagnostoprocedure?key=%QUERY',
        limit: 10 
    });
    $j('#treatkey').typeahead({
    	valueKey: 'treatcode',
        name: 'treatcode',
        remote: 'http://localhost:3000/typeAhead/ProcedureDesc/diagnostoprocedure?key=%QUERY',
        limit: 10 
    });
    $j('#providername').typeahead({
    	valueKey: 'providername',
        name: 'providername',
        remote: 'http://localhost:3000/typeAhead/insuranceProviderName/scratch?key=%QUERY',
        limit: 10 
    });