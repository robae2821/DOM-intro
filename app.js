console.log("Javascript is alive!");
// In a separate JS file:

// When the page loads:

// Change the greeting from "Hello, There!" to "Hello, World!".
// 
document.getElementById("greeting").innerHTML = "Hello, World";
// Set the background color of each <li> to yellow.
var  liBackground = document.querySelectorAll("li")
for (let i = 0; i < liBackground.length; i++) {
    liBackground[i].style.backgroundColor = "yellow"
}
// Create an image tag, set its src attribute to http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, and append the to the #greeting div.
var img = document.createElement("img")
img.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
var inputImg = document.getElementById("greeting");
inputImg.appendChild(img);
// Create and add a ul element to the end of the body with a class of "todo-items"

// Go through the array ['make coffee','eat donut','change diapers','drive to work'] and create an li element for each item e.g. <li>make coffee</li>

// Add each newly created li element to your ul of class "todo-items"
var body = document.body
var array = [
    'make coffee',
    'eat donut',
    'change dipers',
    'drive to work'
]
var toDoList = document.createElement('ul')
toDoList.className = "todo-items"
for (var i = 0; i < array.length; i++){
    var doList = document.createElement('li')
    var todoListText = document.createTextNode(array[i])
    body.appendChild(toDoList)
    toDoList.appendChild(doList)
    doList.appendChild(todoListText)
};

// Afterwards:

//=== 4 Add the class of selected to an <li> when it is clicked. Remove it from any other lis as well.

//=== 5 Change the image to be the most recently clicked food item.

//=== 6 When the gray div is moused over, it's removed from the DOM.
document.getElementById("ghosting").addEventListener("mouseover", imgRemove)
function imgRemove() {
    document.getElementById("ghosting").remove()
}

//=== 7 When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.
document.getElementById("resize").addEventListener("mouseover", mouseOver)
document.getElementById("resize").addEventListener("mouseout", mouseOut)
function mouseOver() {
    document.getElementById("resize").style.width = "400px"
}
function mouseOut() {
    document.getElementById("resize").style.width = "200px"
}
//=== 8 When the reset button is clicked - remove the selected class from each <li> and change the image to panic.jpeg.

//==== 9 When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"
window.onkeypress = function(event) {
    if (event.keyCode = 0 - 9) {
        alert("I HATE NUMBERZZZ")
    } 
}
// BONUS: If someone types the Konami Code, the page alerts "YOU ARE AN EVENT HANDLER GURUUUUUUUUU!"