document.getElementById("btnOne").onclick = function() {
	var txt = document.getElementById("txtOne").value;
	eval(txt);
   /* var num = prompt("Enter a number");
    if(num < 50){
        alert(num + " is under 50");
    }
    else{
        alert(num + " is above 50");
    }*/
};

document.getElementById("btnTwo").onclick = function() {
	var txt = document.getElementById("txtTwo").value;
	eval(txt);
    /*var num1 = 7;
    var num2 = 7;
    if(num1 = 2){
        alert("Wait, what was the value of num1?  " + num1 );
    }
    if(num2 == 7){
        alert("What is the difference between = and ==?");
    }*/
};



document.getElementById("btnThree").onclick = function() {
   var txt = document.getElementById("txtThree").value;
	eval(txt);
	/*var num = prompt("Type in a number, try the values 7, 10, 0, and -1");
    if(num == 7){
        alert("This statement uses several if statements");
    }
    if(num < 10){
        alert("They are the exact same conditions as the next question");
    }
    if(num > 0){
        alert("So what is the difference between this, and using an else if structure?")
    }
    else{
        alert("That was a negative number");
    }*/
};

document.getElementById("btnFour").onclick = function() {
	var txt = document.getElementById("txtFour").value;
	eval(txt);
	/*
    var num = prompt("Type in a number, try the values 7, 10, 0, and -1");
    if(num == 7){
        alert("This statement uses an else if statement");
    }
    else if(num < 10){
        alert("They are the exact same conditions as the previous question");
    }
    else if(num > 0){
        alert("So what is the difference between this, and using several if structure?")
    }
    else{
        alert("That was a negative number");
    }
*/
};



document.getElementById("btnFive").onclick = function() {
var txt = document.getElementById("txtFive").value;
	eval(txt);
	
	/*Predict what the output will be, then run the code for the following values. 215, 50, 30
	var temp = parseFloat(prompt("Enter temperature: "));
	if(temp > 212){
		alert("Boiling water");
	}
	else if(temp > 32){
		alert("Liquid Water");
	}
	else{
		alert("Ice");
	}
*/
};

document.getElementById("btnSix").onclick = function() {
	var txt = document.getElementById("txtSix").value; alert(txt);
	eval(txt);
	
};



document.getElementById("btnSeven").onclick = function() {
var txt = document.getElementById("txtSeven").value;
	eval(txt);
	
	/*One side of a triangle cannot be larger than the sum of the two other sides.  
		This example demonstrates the use of the || (or) symbol.  Predict the output with 
		your own inputs, then run the code to see if your prediction was correct.  
	var sideA = parseFloat(prompt("Enter Side A"));
	var sideB = parseFloat(prompt("Enter Side B"));
	var sideC = parseFloat(prompt("Enter Side C"));
	if(sideA > sideB + sideC || sideB > sideA + sideC || sideC > sideA + sideB){
		alert("Invalid Triangle");
	}
	else{
		alert("Valid Triangle");
	}
 */
};

