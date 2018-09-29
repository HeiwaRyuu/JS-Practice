// In this section i will be working out about functions
// Functions are basically separate actions that do one specific task
// That helps dividing a big problem into small parts and solving each small piece 
// They also help us shorten up the amount of code we need to write
//  because once written, we can call it again only by typing its name, we don't have to rewrite the code

// Creating a function is really simple

function functionName(){}

// As shown above, you only need to write function, in front of it the function's name, open parentesis and curly brackets
// Lets create a function that prints out our name

function myName(){
    document.write("Vitor!");
}

// In order to the function do what is meant to do we need to call it, to do so just type its name and parentesis and a semicolon

myName();

// We also have functions with parameters

function area(w,h){
    var area = w*h;
    document.write("The area is : ",area);
}

// Now we call it with the parameters we want and watch the magic happen!

area(9,9);

// The program will receive these parameters and push them into the function
// After doing the value substitution, it calculates the result and prints it on screen
// In this case, "The area is : 81" will be printed

// JavaScript also has a strange behavior once you pass more parameters to the function than it can actually receive

area(8,5,9);

// In the example above, the program will ignore the last given parameter and will only work with the first 2 resulting in 40

