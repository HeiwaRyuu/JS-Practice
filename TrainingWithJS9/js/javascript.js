// In this file i will be working with loops in JavaScript
// The definition of a loop is an action that will keep happening until the stop trigger action occurs
// There are three main loops : (while loop), (do while loop), (for loop)

// For example, let's create a loop that can count from 0 to 10

var a = 0;

while(a <= 10){
    document.write(a + "</br>");
    a++;
}

document.write("</br>");

// Or we can create a loop that only displays even numbers until 20

var b = 0;

while(b <= 20){
    document.write(b + "</br>");
    b+=2;
}

document.write("</br>");

// Or a loop that shows instead of even numbers, odd numbers

var c = 1;

while(c <= 21){
    document.write(c + "</br>");
    c+=2;
}

document.write("</br>");

// Or something more interesting, print only prime numbers until 100

for(i=2;i<=100;i++){
    for(j=2;j<=i;j++){
        if(j==i){
            document.write(i + "</br>");
        }
        if(i%j==0){
            break;
        }
    }
}

document.write("</br>");

// Or we can also do it for Fibonacci sequence!

var pri = 0;
var sec = 1;

for(i=0;i<=100;i++){
    var third = pri+sec;
    document.write(sec + "</br>");
    pri = sec;
    sec = third;
}