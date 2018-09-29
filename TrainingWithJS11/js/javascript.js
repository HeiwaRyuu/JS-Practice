// In this section i will work on an interactive HTML and JavaScript program
// I will create a function that will receive the parameters the user inputs in front-end
// and use those parameters to actually calculate the area of the rectangle with height and width given by the user
// You can aslo check the HTML source code to check what have changed from the previous codes

function area(){
    var w=document.getElementById("width").value;
    var h=document.getElementById("height").value;
    area=h*w;
    document.getElementById("answer").value = area;
}

// With this command above, we create an interactive webpage where the user can enter the values he wants to and have an answer