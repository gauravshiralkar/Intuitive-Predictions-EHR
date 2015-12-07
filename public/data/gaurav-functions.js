
/*var notify = $.notify('<strong>Predicting</strong> Please wait...', {
	type: 'success',
	allow_dismiss: false,
	showProgressbar: true
});*/


function checkFromDB(field,formfield) {
	var val = document.getElementById(formfield).value;
	$.get("/check/"+field+"/"+val, function(results) {
		console.log(results.length);
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