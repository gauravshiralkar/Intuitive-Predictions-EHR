if(document.getElementById('filep').val != ""){
	
	$.get('/pdfpopulate/'+document.getElementById('filep').val, function (results) {
		$.notify({
			title: '<strong>Autopopulating</strong>',
			message: 'From PDF'
		},{
			type: 'success'
		});
		console.log(results);
		document.getElementById('insuranceId').value = results[0].insuranceDetailsId;
		document.getElementById('providername').value = results[0].insuranceProviderName;
		document.getElementById('pname').value = results[0].patientFullName;
		
		if (results[0].gender==='M'){document.getElementById('m1').checked=true;}else{document.getElementById('m2').checked=true;}
		document.getElementById('paddress').value = results[0].patientAddressStreet;
		document.getElementById('pcity').value = results[0].patientAddressCity;
		document.getElementById('pzip').value = results[0].patientAddressZip;
		document.getElementById('pstate').value = results[0].patientAddressState;
		document.getElementById('ptel').value = results[0].tel;
		document.getElementById('pplan').value = results[0].insuranceDetailsPlan;
		
		document.getElementById('pesname').value = results[0].patientESName;
		document.getElementById('ptel').value = results[0].tel;
		
		document.getElementById('dcode').focus();
		
		document.getElementById('textfield2').value = results[0].dob;
		document.getElementById('textfield8').value = results[0].filingDate;
		document.getElementById('textfield12').value = results[0].insuranceDetailsExpiryDate;
	});
}

function predicting() {
	var notify = $.notify('<strong>Predicting</strong> Please wait...', {
			type: 'success',
			allow_dismiss: false,
			showProgressbar: true
	});
	setTimeout(function () {document.getElementById("ehrform").submit();},6000);
}


function basicvalidation(formfield,dispname) {
	var val = document.getElementById(formfield).value;
	if (val ==="") {
		$.notify({
			message: ''+dispname+' Cannot be Blank'
		},{
			type: 'danger',
			placement: {
					from: "top",
					align: "center"
					}
		});
		document.getElementById(formfield).focus();
		return false;
	}
	
	if (formfield==='insuranceId'){
		if (isNaN(document.getElementById(formfield).value)) {
			$.notify({
				message: ''+dispname+' is not valid'
			},{
				type: 'danger'
			});	
			return false;
		}
		
	}
	
	if (formfield==='providername'){
		if (!(/^[-A-Z ]+$/i.test(val))){
			$.notify({
				message: ''+dispname+' is not valid'
			},{
				type: 'danger'
			});	
			return false;
		}
		
	}
	
	if (formfield==='pname'){
		if (!(/^[-A-Z ]+$/i.test(val))){
			$.notify({
				message: ''+dispname+' is not valid'
			},{
				type: 'danger'
			});	
			return false;
		}
		
	}
	
	if (formfield==='pzip'){
		if (!(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(val))){
			$.notify({
				message: ''+dispname+' is not valid'
			},{
				type: 'danger'
			});	
			return false;
		}
		
	}
	
	if (formfield==='ptel'){
		if (!(/^(\+|1\s)?\d{10}[0-9]$/.test(val))){
			$.notify({
				message: ''+dispname+' is not valid'
			},{
				type: 'danger'
			});	
			return false;
		}
		
	}	
	
	return true;
}

function checkAll() {
	var flag=true;
	//$(":text, :file, :checkbox, select, textarea").each(function() {
	//$(":input").each(function() {
	$(":text, :radio, :checkbox, select").each(function() {
	   if($(this).val() === "")
	   {
		   $.notify({
				message: ''+$(this).attr('alt')+' cannot be left blank'
			},{
				type: 'danger'
			});	
		   //$(this).addClass("error");
		   //$(this).val("Fill "+$(this).attr('alt'));
		   //document.getElementById($(this).attr('id')+'lbl').className += "error";
		   $(this).focus();
		   flag=false;
		   return false;
	   }
	});
	if(flag){
	   predicting();
	}
}

function autopopulate(val){
	$.get("/autopopulate/"+val, function(results) {
		document.getElementById('providername').value = results[0].insuranceProviderName;
		document.getElementById('pname').value = results[0].patientFullName;
		document.getElementById('textfield2').value = results[0].dob;
		if (results[0].gender==='M'){document.getElementById('m1').checked=true;}else{document.getElementById('m2').checked=true;}
		document.getElementById('paddress').value = results[0].patientAddressStreet;
		document.getElementById('pcity').value = results[0].patientAddressCity;
		document.getElementById('pzip').value = results[0].patientAddressZip;
		document.getElementById('pstate').value = results[0].patientAddressState;
		document.getElementById('ptel').value = results[0].tel;
		document.getElementById('pplan').value = results[0].insuranceDetailsPlan;
		document.getElementById('textfield8').value = results[0].filingDate;
		document.getElementById('textfield12').value = results[0].insuranceDetailsExpiryDate;
		document.getElementById('pesname').value = results[0].patientESName;
		document.getElementById('ptel').value = results[0].tel;
		document.getElementById('dcode').focus();
		/*$(":text").each(function() {
			$(this).attr("disabled",true);
		});*/
	});
	
}

function checkFromDB(table,field,formfield,dispname) {
	var retval=basicvalidation(formfield,dispname);
	var val = document.getElementById(formfield).value;
	if(formfield==='providername'){val=val.toUpperCase();alert(val);}
if (retval){
	if (formfield==='insuranceId') {
		$.get("/check/"+table+"/"+field+"/"+val, function(results) {
			if (results.length == 0) {
				$.notify({
					title: '<strong>Warning</strong>',
					message: 'Please verify '+dispname
				},{
					type: 'warning'
				});
			}else{
				$.notify({
					title: '<strong>Autopopulating</strong>',
					message: 'Found record for '+dispname
				},{
					type: 'success'
				});
				autopopulate(val);
			}
			
			});
	}
	else{
		$.get("/check/"+table+"/"+field+"/"+val, function(results) {
		if (results.length == 0) {
			$.notify({
				title: '<strong>Danger</strong>',
				message: 'InValid '+formfield
			},{
				type: 'danger'
			});
		}else{
			$.notify({
				title: '<strong>Success</strong>',
				message: 'Valid '+formfield
			},{
				type: 'success'
			});
		}
		
		});
	}
}
}


function checkTreatCode() {
	var dcode = document.getElementById('diagcode').value;
	var tcode = document.getElementById('treatcode').value;
	
	$.get("/checktreatcode/"+dcode+"/"+tcode, function(results) {
		if (results.length == 0) {
			$.notify({
				title: '<strong>Danger</strong>',
				message: 'InValid Treatment Code for given Diagnosis Code '+dcode
			},{
				type: 'danger'
			});
		}else{
			$.notify({
				title: '<strong>Success</strong>',
				message: 'Valid Treatment Code'
			},{
				type: 'success'
			});
		}
		
		});
}

function addrow() {
	var row = document.getElementById("rowToClone"); // find row to copy
    var table = document.getElementById("myTable"); // find table to append to
    var clone = row.cloneNode(true); // copy children too
    clone.id = "newID"; // change id or other attributes/contents
    table.appendChild(clone); // add new row to end of table
    $("newID").closest("td").prev().empty();
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
 
}

function addtreatrow() {
    var table = document.getElementById("myTable"); // find table to append to
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell2.colspan=2;
    cell2.innerHTML="SKDGKA";
}



function delrow(o) {
	$(o).closest('tr').remove()
}


function getDCode() {
	var dkey = document.getElementById('diagkey').value;
	//document.getElementById('diagcode').value='results';
	$.get("/searchkey/diagnosiscodes/DiagnosticDesc/"+dkey, function(results) {
			console.log(results);
			document.getElementById('diagcode').value=results[0].first;
		});
}

function getTCode() {
	var dkey = document.getElementById('treatkey').value;
	//document.getElementById('diagcode').value='results';
	$.get("/searchkey/procedureCodes/ProcedureDesc/"+dkey, function(results) {
			console.log(results);
			document.getElementById('treatcode').value=results[0].first;
		});
	setTimeout(checkTreatCode, 100);
	//checkTreatCode;
}
