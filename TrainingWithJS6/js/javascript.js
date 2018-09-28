// JavaScript has 4 main operators : (+ -> addition) , (- -> subtraction) , (* -> multiplication) and (/ -> division)
// We can use these operators to proceed mathematical operations as we have done before

var a = 10, b = 20;
var result = a + b, result1 = a - b, result2 = a * b, result3 = a / b;

// As expected, the var result will have the value of 30, the result1 the value -10, the result2 the value 200
// and the result3 the value  1/2 or 0.5

// The program also does the operations in a specific pre-defined original order, for example:

var ex = 10 + 10 * 20;

// JavaScript does the same way we calculate it manually, first multiply 10 with 20 and then add 10 resulting in 210
// If we want the result to be 400, we would need to add parenthesis as shown below

var ex = (10 + 10) * 20;

// The operation above would be calculated as 10+10=20, and then 20*20=400, resulting in 400

// We also have comparison operators
// There are 3 comparison operators with the equal sign : (= assignment) (== equality) (=== strict equality)

var c = 20;
var d = "20";

if( c = d ){
    alert("They are equal!");
}else{
    alert("They are different!");
}

// The example above would return true, even though they have different types of data, because we are reassigning the value of c to d

if( c == d ){
    alert("They are equal!");
}else{
    alert("They are different!");
}

// In the example above it still returns true because JavaScript in only checking they're values and not they're data type

if( c === d ){
    alert("They are equal!");
}else{
    alert("They are different!");
}

// But in the example above it returns false, because it's a strict equality that evaluates even the data type
// in this case, one is a number and the other is a string

// We also have other comparison operators
// (!= not equal to)
// (> greater than)
// (< lesser than)
// (>= greater than or equal to)
// (<= lesser than or equal to)

// We also have logical operators 
// (&& and)
// (|| or)

if(  a == b && c == d ){
    alert("Both are equal!");
}else{
    alert("One of them or both are different!");
}

// The && (and) operator will only return true if both the conditions are true

if(  a == b || c == d ){
    alert("Both are equal!");
}else{
    alert("One of them or both are different!");
}

// The || (or) operator will only return true if one of the conditions are true
