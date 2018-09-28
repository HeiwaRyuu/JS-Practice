// This now is a training with conditionals in JavaScript

var a = 10;
var b = 20;

if( a < b ){
    var result = a + b;
    document.write("The result of a + b is : ",result);
}

// The command above is a conditional statement, that means it will only be read by the program if the codition is true
// As the condition is true, this code will be interpreted and will be printed on screen the sentence -> "The result of a + b is : 30"

// There's also complement commands to the conditionals such as else, that provides what the program should do in case the if clause 
// returns false

if( a > b ){
    var result = a + b;
    document.write("The result of a + b is : ",result);
} else{
    var result = a - b;
    document.write("The result of a - b is : ",result);
}

// In the case above, the return will be "The result of a - b is : -10", because the first condition of a being greater than b is false, so it will
// return the else part

// We also have the option of writing as many conditions as we want using else if statements

if( a > b ){
    var result = a + b;
    document.write("The result of a + b is : ",result);
}
else if( a = b ){
    var result = a * b;
    document.write("The result of a * b is : ",result)
}
else{
    var result = a - b;
    document.write("The result of a - b is : ",result);
}

// In the case above, if a = b is true, the return will be "The result of a * b is : 200", because the first condition of a being greater than b is false,
// so it will check the second condition "if a = b", that returns true