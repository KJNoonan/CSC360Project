// Sean Dirr Calorie calculator Javascript
$(function() {
	var currate = 0;
	var ratecount = 0;
	var scoresubmit = 0;
		
	$("#submit").click(function() {
	var comNum, comId, comment, nNode, brNode, comNode, comSec;
	comment	= $("#comBox").val();
	if(comment !== ""){
		nNode = document.createElement("textarea");
		nNode.style.width = "400px";
		nNode.style.height ="100px";
	
		brNode = document.createElement('br')
		comNode = document.createTextNode(comment);
		nNode.appendChild(comNode);
		comSec = document.getElementById("commentSection");
		comSec.appendChild(nNode);
		comSec.appendChild(brNode);
	}
	document.getElementById('comBox').value = "";
	console.log(comSec);
	localStorage.setItem('comSecContents', JSON.stringify(comSec.innerHTML));
	});
	$("#raterbutt").click(function() {
	  var userRate, newRate, message;
	  var overall, ease, responseTime, enthusiasm, communication, usesBook;
		overall = $("input[name=overall]:checked").val();
		ease = $("input[name=easiness]:checked").val();
		responseTime = $("input[name=timeliness]:checked").val();
		enthusiasm = $("input[name=enthusiasm]:checked").val();
		communication = $("input[name=communication]:checked").val();
		if ($("input[name=book]:checked").val() === "No") usesBook = 1;
		else usesBook = 5;
		
		userRate = (Number(overall) + Number(ease) + Number(responseTime) + Number(enthusiasm) + Number(communication) + usesBook)/6;
	  if (scoresubmit === 0){
	    if (!isNaN(userRate)){
		    scoresubmit ++;
		    $("#ratTitle").html("Thank you for submitting your score!")
			currate += userRate;
			ratecount ++;
			newRate = currate/ratecount;
			message = (Math.round(newRate * 100)/100).toString() + "/5";
			$("#tRating").html(message);
	    }
		else {$("#ratTitle").html("Please fill out all boxes.")}
	  }
	});	
});