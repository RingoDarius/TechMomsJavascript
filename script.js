document.getElementById("btnOne").onclick = function() {
	var language = "Javascript";
	alert(language + " Rocks!");
};

document.getElementById("btnTwo").onclick = function() {
	var language = "Javascript";
	alert("language" + " Rocks!");
};



document.getElementById("btnThree").onclick = function() {
	var num = 4 + 2;
	alert("No Quotes: " + num);
};

document.getElementById("btnFour").onclick = function() {
	var num = "4" + "2";
	alert("Quotes: " + num);
};



document.getElementById("btnFive").onclick = function() {
	var num = 12 + 6 / 3;
	alert("Order of Operations: " + num);
};

document.getElementById("btnSix").onclick = function() {
	alert("Adding " + 4 + 2);
};

document.getElementById("btnSeven").onclick = function() {
	alert("Adding " + (4 + 2));
};
document.getElementById("btnEight").onclick = function() {
	alert("Modulus " + 17 % 3);
};

document.getElementById("btnNine").onclick = function() {
	alert("Divide " + 17 / 3);
};

document.getElementById("btnTen").onclick = function() {
	alert("ParseInt " + parseInt(17 / 3));
};

document.getElementById("btnEleven").onclick = function() {

	alert("ToFixed " + parseFloat(17 / 3).toFixed(2));
};



document.getElementById("btnTwelve").onclick = function() {
	var num = prompt("Enter a number");
	alert("You entered: " + num);
};

document.getElementById("btnThirteen").onclick = function() {
	var txt = prompt("Enter a number");
	alert("Adding two: " + txt + 2);
};

document.getElementById("btnFourteen").onclick = function() {
	var txt = prompt("Enter a number");
	var num = parseInt(txt);
	alert("Adding two: " + num + 2);
};


document.getElementById("btnFifteen").onclick = function() {
	var txt = prompt("Enter a word");
	var num = txt.length;
	alert("Length: " + num);
};


document.getElementById("btnSixteen").onclick = function() {
	var txt = prompt("Enter a word");
	var letter = txt.charAt(0);
	alert("Char At: " + letter);
};

document.getElementById("btnSeventeen").onclick = function() {
	var txt = prompt("Enter a word");
	var num = prompt("Enter a number less then " + txt.length);
	alert("Char At: " + txt.charAt(num));
};

/********************************************************** 
 * Your turn:  Complete the method to display the last letter of
 * whatever word the user enters in.
 ********************************************************/
document.getElementById("btnEighteen").onclick = function() {
	var txt = document.getElementById("txtEighteen").value;
	eval(txt);
	//var txt = prompt("Enter a word");
	//var end = 0;  //Modifiy this code to be the last position in the word
	//alert("Last Letter: " + txt.charAt(end)); //Modify this code to print out the character at the last position
};


/********************************************************** 
 * Your turn:  Complete the method to display remainder of the number divided by 2
 ********************************************************/
document.getElementById("btnNineteen").onclick = function() {
	var txt = document.getElementById("txtNineteen").value;
	eval(txt);
	//var num = prompt("Enter a number");
	//var ans = 0;  //Modifiy this code to be the remainder of the number divided by 2
	//alert("Remainder: " + ans); 
};


/********************************************************** 
 * Your turn:  Complete the method to display to have the user enter a
 * the current tempature in Fahrenheit.  Have the program report what
 * that tempature is in Celsius.  You may need to look up the equation.
 * 
 * Have the answer display to two decimal places.
 ********************************************************/
document.getElementById("btnTwenty").onclick = function() {
	var txt = document.getElementById("txtTwenty").value;
	eval(txt);
};
