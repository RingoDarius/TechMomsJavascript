document.getElementById("btnOne").onclick = function() {
	//var language = ["Javascript", "Java", "c++", "HTML", "CSS", "Python"];
	//alert("Number of Languages: " + language.length);
	var txt = document.getElementById("txtOne").value;
	eval(txt);
};

document.getElementById("btnTwo").onclick = function() {
	//var language = ["Javascript", "Java", "c++", "HTML", "CSS", "Python"];
	//var input = prompt("Enter a number from 0 to " + language.length);
	//alert(language[input] + " Rocks!");
	var txt = document.getElementById("txtTwo").value;
	eval(txt);
};



document.getElementById("btnThree").onclick = function() {
  var language = ["Javascript", "Java", "c++", "HTML", "CSS", "Python"];
	//Modify the lastPos variable to use the length property 
	//to allow it to print the last item in the list
	//var lastPos = 0;  
	//alert(language[lastPos] + " is the last language in the list");
	var txt = document.getElementById("txtThree").value;
	eval(txt);
};



document.getElementById("btnFour").onclick = function() {
	//var language = ["Javascript", "Java", "c++", "HTML", "CSS", "Python"];
	//for(var i = 0; i < language.length; i++){
	//	alert(language[i]);
	//}
	var txt = document.getElementById("txtFour").value;
	eval(txt);
};


function displayList(lst, location){
	
	var orList = document.createElement("ol");
    for(let i of lst){
		var lstItem = document.createElement("li");
		lstItem.textContent = i;
		orList.appendChild(lstItem);
	 }
	document.getElementById(location).innerHTML = "";
    document.getElementById(location).appendChild(orList);
}


document.getElementById("btnFive").onclick = function() {
	 //var language = ["Javascript", "Java", "c++", "HTML", "CSS", "Python"];
	 //displayList(language, "divFive");
	 var txt = document.getElementById("txtFive").value;
	 eval(txt);
	
};



var newList = [];
document.getElementById("btnSix").onclick = function() {
	//var input = prompt("Enter a shopping list item: ");
	//newList.push(input);
	//displayList(newList, "divSix");
	var txt = document.getElementById("txtSix").value;
	eval(txt);
};

document.getElementById("btnSeven").onclick = function() {
	//Create an array of your favorite bands named bands  
	//Use the displayList function to display the list in divSeven
	var txt = document.getElementById("txtSeven").value;
	eval(txt);
};

