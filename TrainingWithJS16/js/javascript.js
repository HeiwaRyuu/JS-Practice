// In this section we will learn how to change the HTML content directly through JavaScript!
// It's very simple, you just have to change the innerHTML property

var headerText = document.getElementById("head");

headerText.innerHTML = "I have changed the title directly from JavaScript!";

// As you expect, the title in the HTML will get substituted by the sentence "I have changed the title directly from JavaScript!" 
// We can also create elements inside JavaScript and add them into a specifc part of our HTML

var newParagraph = document.createElement("p");
newParagraph.innerHTML = "This is a paragraph created inside JavaScript!";
document.getElementById("youL").appendChild(newParagraph);

// The command above appends the paragraph inside the ul with the id of youL
// Instead of creating a paragraph and then defining its innerHTML, we have another command that shotcuts it

var ShortcutForText = document.createTextNode("This is a text node that is created inside JavaScript!");
document.getElementById("youL").appendChild(ShortcutForText);

// We can also change the value of src in HTML for example, and then create a function that slides through images

var imag = document.getElementById("image");
var arrayOfImages = ["images/image1.jpg","images/image2.jpg","images/image3.jpg"];
var current = 0;

function imageSlider(){
    imag.setAttribute("src",arrayOfImages[current]);
    current++;

    if(current >= arrayOfImages.length){
        current = 0;
    }
}

setInterval(imageSlider,2000);

// The example above is a simple Image Slider that atumatically changes the background image by changing the "src" Attribute in HTML