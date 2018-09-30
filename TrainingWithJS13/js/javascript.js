// In this section i will showcase a dice function, that means a funcion that randomly generates a number between 1 and 6
// Before that, let's learn about the functions i will be using in the dice function
// There are many pre-made JavaScript commands that we can use, for example : Math.round

var number = 5.7
var rounded = Math.round(number);
document.write(rounded + "</br>");

// In the command lines above, we defined a variable number with decimal places and a rounded variable that receives 
// the rounded value from the variable number, after that we printed on screen the value of the rounded variable = 6

// We also have the random function, that randomly generates a number between 0 and 1

var random = Math.random();
document.write(random + "</br>")

// From those 2 commands, we can create a function that simulates a rolling dice

var randomMulti = Math.floor(Math.random() * 6 + 1);
var randomInteger = Math.round(randomMulti);
var dice = document.write(randomInteger + "</br>");