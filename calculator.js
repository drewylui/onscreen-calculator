
/* TO DO
- build the calculator HTML via a function, rather than manually typing in divs.
*/

/* 
Start of code for calculator
*/

// Declare array to hold values of calculator button presses
var inputArray = [];
var numString = "";

// Stores the contents of the HTML element passed to it. Called from click events on the divs in calculator.html
function storeValue(element) {	

	if (element.innerHTML === "+") {
		inputArray.push(parseInt(numString));
		inputArray.push(element.innerHTML);
		numString = "";
	} 
	else if (element.innerHTML === "-") {
		inputArray.push(parseInt(numString));
		inputArray.push(element.innerHTML);
		numString = "";
	}
	else if (element.innerHTML === "*") {
		inputArray.push(parseInt(numString));
		inputArray.push(element.innerHTML);
		numString = "";
	}
	else if (element.innerHTML === "/") {
		inputArray.push(parseInt(numString));
		inputArray.push(element.innerHTML);
		numString = "";
	}
	else {
		numString = numString + element.innerHTML;
	}

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

function calculate() {
	var inputString = "";

	// Add the last number to the inputArray, since storeValue() cannot add it
	if (numString != "") {
		inputArray.push(numString);
		numString = "";
	}

	for (i=0; i<inputArray.length; i++) {		
	
		console.log(inputArray[i].toString());
	}

}


/* 
These are test functions
*/
function test () {
	alert("test worked!");
}

function test_calculate () {
	var numberArray = [];

	// Split the string into an array of numbers and operators
	numberArray = clickedString.split(/[+|-|*|/]/);

	for (i=0; i<numberArray.length; i++) {		
		console.log(numberArray[i]);
	}

	for (i=0; i<numberArray.length; i++) {
		
	}

}

function test_storeValue(element) {	
	clickedString = clickedString + element.innerHTML;
}


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
