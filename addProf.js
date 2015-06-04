

$(function(){
    addedProf ={
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
        addedProf.name = nam;
        var uni = $("#university").val();
        addedProf.school = uni;
        var dept = $("#dept").val();
        addedProf.department = dept;
        addedProf.comments = $("#comment").val();
        addedProf.overall = $("input[name=overall]:checked").val();
        addedProf.ease = $("input[name=easiness]:checked").val();
        addedProf.responseTime = $("input[name=timeliness]:checked").val();
        addedProf.enthusiasm = $("input[name=enthusiasm]:checked").val();
        addedProf.communication = $("input[name=communication]:checked").val();
        addedProf.usesBook = $("input[name=book]:checked").val();
        localStorage.setItem("addedProf",addedProf);
        window.location.href = "addedConf.html";
    });
    
    $("#home").click(function(){
        
        window.location.href = "search.html";
        
        
    });
    
    
    
    
});