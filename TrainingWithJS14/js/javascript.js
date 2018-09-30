// In this section i will be working on strings and boolean values 
// A string is an object that stores multiple values in sequence, but it's considered a single value for the program

var stringEx1 = "This is a string!";

// If you are working with single quotations, end it with single quotations, if you are working with double quotations
// finish with double quotations
// If you need to add quotations inside your string just use a backslash before it as the example below

var stringEx2 = "This is a string with a quotation inside it \", you \" just \" need \" a \" backslash \" ";

// We also have properties pre-made by JavaScript for strings such as .length

var stringEx3 = "This string has 29 caracters!"
var length1 = stringEx3.length;
document.write(length1 + "</br>");

// This property counts how many caracters are in the given string and give it in a number form

// We also have a property called charAt, that returns the character at a chosen position n in a string

var charAtEx = stringEx3.charAt(16);
document.write(charAtEx + "</br>");

// The command line above will print on screen the 17th caracter in the given string

// We also have a function called search, that will return the index of the given argument

var searchEx = stringEx3.search(2);
document.write(searchEx + "</br>");

// Let's go for Date Objects
// We have a lot of pre-define properties for dates, let's showcase them down below

var date = new Date();
document.write(date + "</br>");

// That variable by itself will hold all the information about our current date
// If we want to target a specific element from the date we also have a lot of properties

var year = date.getFullYear();
document.write(year + "</br>");

// As we expected, it returns the value 2018, that's the year we are currently in!
// We can also get values from time: Months, hours, minutes, seconds...

var month = date.getMonth();
document.write(month + "</br>");

var hour = date.getHours();
document.write(hour + "</br>");

var minutes = date.getMinutes();
document.write(minutes + "</br>");

var seconds = date.getSeconds();
document.write(seconds + "</br>");

