// In this file i will talking about increment / decrement
// There are also some shortcuts when it comes to increment and decrement

/*
var a++;
var a--;
*/

// Both of the operations above will respectively increase a by 1 and decrease a by 1

// It does matter if you put the ++a ou a++
// In the first case (++a) you are incrementing first, and on the second (a++), you're incrementing after

var a = 10;
alert(a++);

// In the example above, the alert will show the value 10, because its alerting the value of a and then incrementing a

alert(++a);

//  Differently, in the example above, the alert will show the value 11, because its incrementing a first
// and then alerting the value of a

// We also have the ternary expression that can resume a lot o coding, for example

var p = 6;
var n = 7;

if( p > n ){
    alert("P is greater than N.");
}else{
    alert("N is greater than P.");
}

// Instead of wrting all that if statement, we can resume all that code in a single line as follows 

var p = 6;
var n = 7;
var c = ( p > n )? alert("P is greater than N.") : alert("N is greater than P.");

// We just create another variable and create an if statement inside the definition of the variable as shown above

