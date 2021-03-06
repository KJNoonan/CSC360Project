//dataInit.js
//
//Initializes the professor data model
//
//Written by Kevin Noonan
//May 2015
//
//The Professor data model has the following attributes:
//String Name
//overall int
//ease int
//responseTime int
//enthusiasm int
//communication int
//usesBook boolean
//comments String[]
var init = function(){
	var objList, profModel, profObj, i;

	objList=[
	{
		name:"Peter Pickles",
		overall:5,
		ease:5,
		responseTime:5,
		enthusiasm:5,
		communication:5,
		school:"DePaul University",
		usesBook:true,
		comments:["Overall:5\nEase:5\nResponse Time:5\nEnthusiasm:5\nCommunication:5\nUses Book\nPeter is the coolest professor!"]
	},
	{
		name:"HardCastle McCormick",
		overall:0,
		ease:0,
		responseTime:0,
		enthusiasm:0,
		communication:0,
		school:"DePaul University",
		usesBook:true,
		comments:["Overall:0\nEase:0\nResponse Time:0\nEnthusiasm:0\nCommunication:0\nDoesn't Use Book\nProf McMeowmers is terrible"]
	},
	{
		name:"Craig Miller",
		overall:5,
		ease:5,
		responseTime:5,
		enthusiasm:5,
		communication:5,
		school:"DePaul University",
		usesBook:true,
		comments:["Overall:5\nEase:5\nResponse Time:5\nEnthusiasm:5\nCommunication:5\nUses Book\nPeter is the coolest professor!"]

	}
	];

	profModel = new Model('prof');
	profModel.delete_all();
   var added = localStorage.getItem("addedProf");
    
   var pinfo = (JSON.parse(added));
    profObj = profModel.create(pinfo);
    profObj.create(pinfo);
    profObj.save();
	for(i=0; i<objList.length; i++){
		profObj = profModel.create(objList[i]);
		profObj.save();
	}
}

init();