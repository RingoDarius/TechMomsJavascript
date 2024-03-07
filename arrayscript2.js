

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



document.getElementById("btnEight").onclick = function() {
	//var language = ["Javascript", "Java", "c++", "HTML", "CSS", "Python"];
	//language.sort();
	//language.reverse();
	//displayList(language, "divEight");
	var txt = document.getElementById("txtEight").value;
	eval(txt);
	

};

document.getElementById("btnNine").onclick = function() {
	//var dieRolls = [];
  //var input = prompt("How many times do you want to roll a die?")
//	for(var i = 0; i < input; i++){
	//	var die = Math.floor(Math.random() * 6 + 1);
	//	dieRolls.push(die);
	//}
	//displayList(dieRolls, "divNine");
	var txt = document.getElementById("txtNine").value;
	eval(txt);
};

document.getElementById("btnTen").onclick = function() {
//Display a list of 10 random numbers with a range of 1-100 by following the steps
//Create an empty numbers array
//Create a random number with a range of 1 to 100
//Add that random number to your array 10 times
//Sort the array from highest to lowest
//Display the array in a div named divTen

var txt = document.getElementById("txtTen").value;
	eval(txt);
};

document.getElementById("btnEleven").onclick = function() {
 // var zooAnimal = ["zebra", "tiger", "lion", "giraffe", "peacock", "bear", 
//			"elephant", "camel", "monkey", "otter"];
//	var input = prompt("Enter an animal");
//	var exists = 0;
//	for(var i = 0; i < zooAnimal.length; i++){
//		if(zooAnimal[i] == input){
//			exists++;
//		}
//	}
//	if(exists == 0){
//		alert("Sorry, we do not have that animal");
//	}
//	else{
//		alert("Yes, that animal is in our zoo");
//	}
var txt = document.getElementById("txtEleven").value;
	eval(txt);
};

function get20DiceRolls(){
	var rolls = [];
	for(var i = 0; i < 20; i++){
		rolls.push(Math.floor(Math.random() * 6+1));
	}
	return rolls;
}


/********************************************************** 
 * Your turn:  Comlete the code segment to count the number of times
 * the user rolled "doubles" or the same value on both dice.  
 ********************************************************/
document.getElementById("btnTwelve").onclick = function() {
	//Two arrays of 20 random dice rolls
	//var dice1 = get20DiceRolls();
	//var dice2 = get20DiceRolls();
	//Variable to count the number of times the user rolled "doubles"
	//var countDoubles = 0;

	//TODO: Code a search loop here

	//alert("Amount of doubles: " + countDoubles)
	//document.getElementById("divTwelve").innerHTML = 
	//		"Dice 1 Rolls: " + dice1.toString() + "<br>" +
	//		"Dice 2 Rolls: " + dice2.toString();

	var txt = document.getElementById("txtTwelve").value;
	eval(txt);
};


/********************************************************** 
 * Your turn:  Magic Eight Ball
 * Create an app similar to the Magic Eight Ball.  
 * When the user clicks the button, it will give a random 
 * response.  Create an array of responses.  Then create
 * a random number within the range of your responses
 * Display the random response in a div named divThirteen  
 ********************************************************/

document.getElementById("btnThirteen").onclick = function() {
	var txt = document.getElementById("txtThirteen").value;
	eval(txt);
};
