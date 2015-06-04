

$(function(){
    profe ={
		name:"Peter Pickles",
		overall:5,
		ease:5,
		responseTime:5,
		enthusiasm:5,
		communication:5,
		school:"DePaul",
        department:"",
		usesBook:true,
		comments:["Overall:5\nEase:5\nResponse Time:5\nEnthusiasm:5\nCommunication:5\nUses Book\nPeter is the coolest professor!"]}
    
    $("#submitP").click(function(){
        console.log("submitted professor");
        var first = $("#fName").val();
        var last = $("#lName").val();
        var nam = first+" "+last;
        profe.name = nam;
        var uni = $("#university").val();
        profe.school = uni;
        var dept = $("#dept").val();
        profe.department = dept;
        profe.comments = $("#comment").val();
        profe.overall = $("input[name=overall]:checked").val();
        profe.ease = $("input[name=easiness]:checked").val();
        profe.responseTime = $("input[name=timeliness]:checked").val();
        profe.enthusiasm = $("input[name=enthusiasm]:checked").val();
        profe.communication = $("input[name=communication]:checked").val();
        profe.usesBook = $("input[name=book]:checked").val();
    });
    
    $("#home").click(function(){
        
        window.location.href = "search.html";
        
        
    });
    
    
    
    
});