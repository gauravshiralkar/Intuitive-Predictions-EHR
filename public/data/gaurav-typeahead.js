
	$j('#pname').typeahead({
    	valueKey: 'pname',
        name: 'pname',
        remote: '/typeAhead/patientFullName/scratch?key=%QUERY',
        limit: 10 
    });
	
	$j('#paddress').typeahead({
    	valueKey: 'paddress',
        name: 'paddress',
        remote: '/typeAhead/patientAddressStreet/scratch?key=%QUERY',
        limit: 10 
    });
	
	$j('#pcity').typeahead({
    	valueKey: 'pcity',
        name: 'pcity',
        remote: '/typeAhead/patientAddressCity/scratch?key=%QUERY',
        limit: 10 
    });
	
	$j('#pzip').typeahead({
    	valueKey: 'pzip',
        name: 'pzip',
        remote: '/typeAhead/patientAddressZip/scratch?key=%QUERY',
        limit: 10 
    });
	$j('#diagkey').typeahead({
    	valueKey: 'diagcode',
        name: 'diagcode',
        remote: '/typeAhead/DiagnosticDesc/diagnostoprocedure?key=%QUERY',
        limit: 10 
    });
    $j('#treatkey').typeahead({
    	valueKey: 'treatcode',
        name: 'treatcode',
        remote: '/typeAhead/ProcedureDesc/diagnostoprocedure?key=%QUERY',
        limit: 10 
    });
    $j('#providername').typeahead({
    	valueKey: 'providername',
        name: 'providername',
        remote: '/typeAhead/insuranceProviderName/scratch?key=%QUERY',
        limit: 10 
    });
