
/*var notify = $.notify('<strong>Predicting</strong> Please wait...', {
	type: 'success',
	allow_dismiss: false,
	showProgressbar: true
});*/


function checkFromDB(table,field,formfield) {
	var val = document.getElementById(formfield).value;
	if (val ==="") {
			$.notify({
				title: '<strong>Danger</strong>',
				message: ''+formfield+' Cannot be Blank'
			},{
				type: 'danger'
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
 
}

function delrow(o) {
	$(o).closest('tr').remove()
}