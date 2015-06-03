$(function() {
	var profModel;
	profModel = new Model('prof');

	$("form").submit(function(e){
		var name, profs;
		name = $("#teacher").val();
		
		profs = profModel.find({name: name.toString()});

		$("#result").html(profs[0].name);
		return false;
	});
});