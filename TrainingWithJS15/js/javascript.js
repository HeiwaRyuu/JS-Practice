// In this section i wll be working on objects and more in depth about object oriented programming
// Let's start by creating an object

var person = new Object();
person.pName = "Vitor";
person.pAge = 17;
person.pProfession = "Student";

// We also have the shortcut for defining an object, there's an example down below

var student = {name:"Pedro" , garde: 90, class: 5};

// Now let's dive into DOM (Document Object Model)
// When using DOM you are basically accessing specific elements from HTML directly in JavaScript

var header = document.getElementById("header");
var header = document.getElementById("title");
var header = document.getElementsByTagName("li");

// If we want to check if these are linked correctly we can do

console.log("What is the type of this element: ",header.nodeType);
console.log("What is the inner HTML : ",header.innerHTML);
console.log("Is there any child nodes : ",header.childNodes);

// If we want to acces specifically the elements inside another element we can do as follows

var listItems= document.getElementsByTagName("li");
var aTag = listItems.getElementsByTagName("a");

// This way, only the anchor tags inside the li's are going to be targeted!


