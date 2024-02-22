

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
