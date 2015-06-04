

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
        profe.comments = $("comment").val();
    });
    
    
    
    
    
    
});