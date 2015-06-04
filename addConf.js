//confirmation page after professor is added


$(function(){
   
    
    aProf = localStorage.getItem("addedProf");
    
    pinfo = (JSON.parse(aProf));
    
    var name = (pinfo["name"]);
    var school = (pinfo["school"]);
    var ease = (pinfo["ease"]);
    var overall = (pinfo["overall"]);
    var dept = (pinfo["department"]);
    var cmnt = (pinfo["comments"]);
    var time = (pinfo["responseTime"]);
    var com = (pinfo["communication"]);
    var enth = (pinfo["enthusiasm"]);

    
    var html1 = "<p> <h3 id='pi'> Name: "+ name+"</h3><br><h4 id='pi'>University: "+school+"</h4><br><h4 id='pi'>Department: "+dept+"</h4><br>Overall: "+overall+"<br>Easiness: "+ease+"<br>Timeliness: "+time+"<br>Communication: "+com+"<br>Enthusiasm: "+enth+"</p>"+"Comment: "+"<p>"+cmnt+"</p>";
    $("#addedInfo").html(html1);

});