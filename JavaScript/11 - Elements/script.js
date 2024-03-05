// CHANGING ATTR

let img = document.getElementById("image");
img.src = "image.png";
img.style.width = "100%";
img.style.height = "auto";

let p = document.getElementsByTagName("p");
p[0].innerText = "This is our first paragraph";
p[0].style.color = "tomato";
p[0].style.fontSize = "24px";

// element.cloneNode() -->
// document.createElement()

let button = document.createElement("button");
let container = document.getElementById("container");
container.appendChild(button);

let buttonText = document.createTextNode("ADD ITEM");
button.appendChild(buttonText);

// document.removeElement()
let li = document.getElementsByClassName("remove");
li = li[0];

let ul = document.getElementById("list");
ul.removeChild(li);
