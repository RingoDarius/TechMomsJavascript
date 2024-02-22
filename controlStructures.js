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



document.getElementById("btnEight").onclick = function() {
var txt = document.getElementById("txtEight").value;
	eval(txt);
	
};

document.getElementById("btnNine").onclick = function() {
	var txt = document.getElementById("txtNine").value;
	eval(txt);

};

document.getElementById("btnTen").onclick = function() {
	var txt = document.getElementById("txtTen").value;
	eval(txt);
	
	/*
var num = parseInt(prompt("Enter an int value:"));
var div = num - 1;
while(num % div != 0){
	div--;
}
alert(div + " is the largest divisor of " + num);
*/
};

document.getElementById("btnEleven").onclick = function() {
var txt = document.getElementById("txtEleven").value;
	eval(txt);
	
/*var band = prompt("Enter the best band ever");
while(band != "Aquabats"){
	band = prompt("Nope, guess again. What is the best band ever");
}
alert("Yes, " + band + " is the best band ever");
*/

};



document.getElementById("btnTwelve").onclick = function() {
var txt = document.getElementById("txtTwelve").value;
	eval(txt);
	
	/*TODO
	Write a script to allow the user to enter a number between 1 and 10.  If the user enters anything else, the program
	should let the user know that was not in the program specifications and allow them to enter again */
};

document.getElementById("btnThirteen").onclick = function() {

	var txt = document.getElementById("txtThirteen").value;
	eval(txt);
	/*
	var num = parseInt(prompt("Enter a number to count to"));
	var sum = 0;
	for(var i = 0; i < num; i++){
		alert("Count: " + i);
		sum += i;
	}
	alert("The sum of the numbers is " + sum);
 */
};

document.getElementById("btnFourteen").onclick = function() {
var txt = document.getElementById("txtFourteen").value;
	eval(txt);
	/*
	var num = parseInt(prompt("Enter a number to count by:"));
	var sum = 0;
	for(var i = 0; i < 20; i += num){
		alert("Count: " + i);
		sum += i;
	}
	alert("The sum of the numbers is " + sum);
 */
};


document.getElementById("btnFifteen").onclick = function() {
var txt = document.getElementById("txtFifteen").value;
	eval(txt);
	/*for(var i = 10; i >= 0; i-=2){
	alert("Count: " + i);
}*/
};


document.getElementById("btnSixteen").onclick = function() {
	var txt = document.getElementById("txtSixteen").value;
	eval(txt);
	/*var word = prompt("Enter a word");
	for(var i = 0; i < word.length; i++){
		var letter = word.charAt(i);
		alert("Char At: " + letter);
	}
 */
};

document.getElementById("btnSeventeen").onclick = function() {
	var txt = document.getElementById("txtSeventeen").value;
	eval(txt);
/*Write a script to allow the user to enter a word, it will show each of the letters in reverse order*/
};


document.getElementById("btnEighteen").onclick = function() {
	var txt = document.getElementById("txtEighteen").value;
	eval(txt);
/*Write a script to allow the user to enter a number.  The script will then report back all the even numbers up to that number*/
};


	document.getElementById("btnNineteen").onclick = function() {
		var txt = document.getElementById("txtNineteen").value;
	eval(txt);
		/*
	var sentence = prompt("Enter a sentence");
	var space = 0;
	for(var i = 0; i < sentence.length; i++){
		var letter = sentence.charAt(i);
		if(letter == ' '){
			space++;
		}
	}
	alert("There are " + space  + " spaces in " + sentence);
 */
};


document.getElementById("btnTwenty").onclick = function() {
	var txt = document.getElementById("txtTwenty").value;
	eval(txt);
	/*Write a script to allow the user to enter a sentence: the program will report the number of vowels in that sentence */
};
