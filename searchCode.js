$(function() {
	var profModel;
	profModel = new Model('prof');

	$("form").submit(function(e){
		$('#result').empty();
		var name, profs, i;
		name = $("#teacher").val();
		
		profs = profModel.find({name: name.toString()});

		//$("#result").html(profs[0].name);
		var table = $("#result").append("<table></table>");
		var headers = table.append("<tr></tr>");
		headers.append("<th>Name</th>");
		headers.append("<th>School</th>");
		headers.append("<th>Overall Rating</th>");
		if(profs.length === 0){
			$("#result").append("<h3>No Professors Found</h3>");
		}else{
			for(i = 0; i < profs.length; i++){
				var data = table.append("<tr></tr>");
				var prof = profs[i];
				data.append("<td>"+prof.name+"</td>");
				data.append("<td>"+prof.school+"</td>");
				data.append("<td>"+prof.overall+"</td>");
			}
		}
		return false;
	});
});