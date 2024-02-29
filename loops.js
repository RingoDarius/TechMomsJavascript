

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
