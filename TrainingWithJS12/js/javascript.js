// In this section i will work on arrays
// An array is basically a variable that can store multiple values
// You can think of it as a variable that stores multiple variables

// Defining an array is basically the same as declaring a variable

var studentsNames = [];

// In order to populate this array, we can do it in 2 main different ways

studentsNames[0] = "Vitor";
studentsNames[1] = "Renata";
studentsNames[2] = "Gunter";
studentsNames[3] = "Gabriel";
studentsNames[4] = "Pedro";

// As you can see, the counting of the element position starts at 0, so if you want to access the third element, use the number 2
// If we want to test the access, just try like shown below

document.write(studentsNames[0] + "<br>");

// We can also use a shortcut to define the elements we want to define

var classNumber = ["First class","Second lass","Third class","Fourth class"];

// And we would also access the value we want the same way, counting from 0 and from left to right in the array

document.write(classNumber[2] + "<br>");
 
// We can store any kind of value inside an array
// Take a look in the example down below

var anyData = ["Hello World!",1,2018,"Math and Programming are great!",true,false];

// We can store strings, numbers and booleans in the same array
// And we access theses values the same way we accessed before

document.write(anyData[3] + "<br>");

// JavaScript is considered an OOPL (Object Oriented Programming Language) because it fulfills all the 4 pre-requrements to be so
// 1°- Encapsulation
// 2°- Aggregation
// 3°- Inheritance
// 4°- Polymorphism

// I will talk more about thid topic in a future section