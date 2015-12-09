
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
			type: 'danger'
		});
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
	$(":text, :radio, :checkbox, select, textarea").each(function() {
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

function checkFromDB(table,field,formfield,dispname) {
	var retval=basicvalidation(formfield,dispname);
	var val = document.getElementById(formfield).value;
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
					title: '<strong>Success</strong>',
					message: 'Found record for '+dispname
				},{
					type: 'success'
				});
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
