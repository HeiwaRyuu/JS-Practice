// In this initial section i will work on the switch function

var fruit = "grape";

switch(fruit){
    case "apple":
    document.write("Apple is currently 4$ per Kg");
    break;

    case "grape":
    document.write("Grape is currently 5$ per Kg");
    break;

    case "pineapple":
    document.write("Pineapple is currently 2$ per Kg");
    break;
}

// The switch function basically works as follows: you choose a variable for it to aplied to (in this case was var fruit),
// and you create cases in wich you define the value that the variable needs to receive in order to trigger the case
// and if none of the cases are triggered, the define default case will be triggered

// As the current value of fruit is grape, the "grape" case will be triggered and will be printed :
// document.write("Grape is currently 5$ per Kg");