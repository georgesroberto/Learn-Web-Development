// CHANGING ATTR

let img = document.getElementById("image");
img.src = "image.png";

let p = document.getElementsByTagName("p");
p[0].innerText = "This is our first paragraph";
p[0].style.color = "tomato";
p[0].style.fontSize = "24px";

// element.cloneNode() -->
// document.createElement()

let button = document.createElement("button");
let container = document.getElementById("container");
container.appendChild(button);

let buttonText = document.createTextNode("Add List Item");
button.appendChild(buttonText);

// document.removeElement()
let li = document.getElementsByClassName("remove");
li = li[0];

let ul = document.getElementById("list");
ul.removeChild(li);

// EVENT LISTENERS
button.addEventListener("click", add, false);

function add() {
  let newLi = document.createElement("li");
  newLi.innerText = "This our new list item";
  ul.appendChild(newLi);
}

let btn = document.getElementById("replaceImage");
btn.addEventListener("click", replaceImage);
btn.addEventListener("dblclick", next);

let newImage = document.createElement("img");
newImage.src = "img.png";

let parentDiv = document.getElementsByClassName("parentDiv");
parentDiv = parentDiv[0];

function replaceImage() {
  parentDiv.replaceChild(newImage, img);
}

let btnNext = document.getElementById("nextImage");
let btnPrev = document.getElementById("previousImage");

btnNext.addEventListener("click", next);
btnPrev.addEventListener("click", previous);

var imageArr = [
  "image.png",
  "img.png",
  "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

var num = 0;
function next() {
  num++;
  if (num >= imageArr.length) {
    num = 0;
  }
  img.src = imageArr[num];
}

function previous() {
  num--;
  if (num < 0) {
    num = imageArr.length - 1;
  }
  img.src = imageArr[num];
}

function animateImages() {
  setInterval(next, 3000);
}

window.onload(animateImages());
