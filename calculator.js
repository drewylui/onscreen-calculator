
/* 
Start of functions for calculator
*/

function test () {
	alert("test worked!");
}

function add (number1, number2) {
	return number1 + number2;
}

function multiply (number1, number2) {
	return number1 * number2;
}

function divide (number1, number2) {
	return number1 / number2;
}

function subtract (number1, number2) {
	return number1 - number2;
}


/* 
These are test functions
*/

/* 
These are the warmup exercises
*/

function my_max (array) {	
	var max = 0;
	for (i=1; i<array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return max;
}

function vowel_count (string) {
	stringArray=string.match(/[a|e|i|o|u]/gi);
	return stringArray.length;	
}

function reverse (string) {
	var reversedString = "";
	stringArray = string.split("");
	for (i=0; i<stringArray.length; i++) {
		reversedString = reversedString.concat(stringArray[i]);
	}
	return reversedString;
}
